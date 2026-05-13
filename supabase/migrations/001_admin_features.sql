-- =============================================================================
-- Migration 001: Admin features
-- Run this in Supabase → SQL Editor
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. Add user_agent and country columns to chat_sessions (if not present)
-- ---------------------------------------------------------------------------

ALTER TABLE chat_sessions
  ADD COLUMN IF NOT EXISTS user_agent TEXT,
  ADD COLUMN IF NOT EXISTS country    TEXT;

-- ---------------------------------------------------------------------------
-- 2. RPC: get_admin_chat_sessions
--    Returns one row per session with aggregate message data.
--    NOTE: chat_messages.chat_id is the FK referencing chat_sessions.id
-- ---------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION get_admin_chat_sessions()
RETURNS TABLE (
  id               UUID,
  session_id       TEXT,
  title            TEXT,
  created_at       TIMESTAMPTZ,
  updated_at       TIMESTAMPTZ,
  user_agent       TEXT,
  country          TEXT,
  message_count    BIGINT,
  last_message_at  TIMESTAMPTZ,
  last_user_message TEXT
)
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT
    s.id,
    s.session_id,
    s.title,
    s.created_at,
    s.updated_at,
    s.user_agent,
    s.country,
    COUNT(m.id)          AS message_count,
    MAX(m.created_at)    AS last_message_at,
    (
      SELECT content
      FROM   chat_messages
      WHERE  chat_id = s.id
        AND  role    = 'user'
      ORDER  BY created_at DESC
      LIMIT  1
    )                    AS last_user_message
  FROM  chat_sessions s
  LEFT  JOIN chat_messages m ON m.chat_id = s.id
  GROUP BY s.id
  ORDER BY s.created_at DESC;
$$;

-- Grant execute only to the service role (used by the server-side Supabase client)
REVOKE EXECUTE ON FUNCTION get_admin_chat_sessions() FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION get_admin_chat_sessions() TO service_role;
