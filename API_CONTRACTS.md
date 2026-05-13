# Admin API Contracts

All admin endpoints live under `/api/admin/*`.
Authentication is enforced at two layers:
1. Next.js Middleware (`src/middleware.ts`) — redirects unauthenticated requests to `/admin/login`
2. Route-handler guard (`src/lib/admin-auth.ts`) — returns `401` for programmatic clients without a valid cookie

The session cookie `admin_session` is `httpOnly`, `sameSite: lax`, `secure` (production only), valid for **12 hours**.

---

## POST /api/admin/auth

Signs in the admin user and sets the session cookie.

### Request

```
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}
```

### Response 200

```json
{ "ok": true }
```

Side-effect: sets `Set-Cookie: admin_session=<jwt>; HttpOnly; SameSite=Lax; Max-Age=43200`

### Errors

| Status | Body | When |
|--------|------|------|
| 400 | `{ "error": "username and password are required" }` | Missing or non-string fields |
| 400 | `{ "error": "Invalid JSON body" }` | Malformed JSON |
| 401 | `{ "error": "Invalid credentials" }` | Wrong username or password |
| 500 | `{ "error": "Server misconfiguration" }` | Env vars missing (ops issue) |

---

## POST /api/admin/logout

Clears the session cookie and redirects to the login page.

### Request

No body required. Cookie must be present (though the endpoint works regardless).

### Response

HTTP 307 redirect to `/admin/login`.
Side-effect: clears the `admin_session` cookie.

---

## GET /api/admin/chats

Returns all chat sessions with aggregate message statistics, ordered by `created_at DESC`.
Requires a valid `admin_session` cookie.

### Response 200

```json
[
  {
    "id": "uuid",
    "session_id": "string",
    "title": "string",
    "created_at": "ISO 8601 timestamp",
    "updated_at": "ISO 8601 timestamp",
    "user_agent": "string | null",
    "country": "ISO 3166-1 alpha-2 string | null",
    "message_count": 4,
    "last_message_at": "ISO 8601 timestamp | null",
    "last_user_message": "string | null"
  }
]
```

### Errors

| Status | Body | When |
|--------|------|------|
| 401 | `{ "error": "Unauthorized" }` | Missing or invalid cookie |
| 500 | `{ "error": "Failed to fetch sessions" }` | Supabase RPC error |

---

## GET /api/admin/chats/[sessionId]

Returns all messages for a given chat session, ordered by `created_at ASC`.
`sessionId` is the `chat_sessions.id` UUID (same as `chat_messages.chat_id`).
Requires a valid `admin_session` cookie.

### Path parameter

`sessionId` — UUID string matching `chat_sessions.id`

### Response 200

```json
[
  {
    "id": "uuid",
    "chat_id": "uuid",
    "role": "user" | "assistant",
    "content": "string",
    "created_at": "ISO 8601 timestamp"
  }
]
```

Empty array `[]` when no messages exist for the given session.

### Errors

| Status | Body | When |
|--------|------|------|
| 400 | `{ "error": "sessionId is required" }` | Missing path parameter |
| 401 | `{ "error": "Unauthorized" }` | Missing or invalid cookie |
| 500 | `{ "error": "Failed to fetch messages" }` | Supabase query error |

---

## Schema changes required (run migration first)

Before these endpoints work, execute `supabase/migrations/001_admin_features.sql` in the Supabase SQL Editor.

The migration:
1. Adds `user_agent TEXT` and `country TEXT` columns to `chat_sessions`
2. Creates the `get_admin_chat_sessions()` SQL function used by `GET /api/admin/chats`
