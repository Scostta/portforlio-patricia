/*
 Run this SQL in Supabase → SQL Editor:

 -- Drop old tables if they exist
 DROP TABLE IF EXISTS chat_messages;
 DROP TABLE IF EXISTS chat_sessions;

 CREATE TABLE chat_sessions (
   id         UUID        PRIMARY KEY,
   session_id TEXT        NOT NULL,        -- anonymous user ID from localStorage
   title      TEXT        NOT NULL DEFAULT 'New conversation',
   created_at TIMESTAMPTZ DEFAULT NOW(),
   updated_at TIMESTAMPTZ DEFAULT NOW()
 );
 CREATE INDEX ON chat_sessions (session_id);

 CREATE TABLE chat_messages (
   id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
   chat_id    UUID        NOT NULL REFERENCES chat_sessions(id) ON DELETE CASCADE,
   role       TEXT        NOT NULL CHECK (role IN ('user', 'assistant')),
   content    TEXT        NOT NULL,
   created_at TIMESTAMPTZ DEFAULT NOW()
 );
*/

import { createClient } from '@supabase/supabase-js'

export function createSupabaseServer() {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!)
}
