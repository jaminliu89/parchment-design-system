# Authentication Shell — Design Contract v1.0
Status: Proposed. Reference: user-provided minimalist welcome/login screenshots.
## IA
Login, signup (where permitted), verification, recovery, OAuth callback, invite accept, setup bootstrap, access denied; session/authorization split. P0 real entry, user creation path, secure session, signout, permissions, error recovery.
## Bootstrap
Self-hosted first admin requires deployment authorization, atomic one-time initialization, closed endpoint afterward. Never expose unguarded public admin claim.
## States
idle/editing/validating/authenticating/challenge/session/redirect/error; signup/verify/expired/reissue; session-expired/access-denied. No misleading user enumeration; safe retry and preserved form input.
## Geometry & shadcn
Centered card max 420px, padding 32px; input/button 44px high, field gap 16px, page padding 24px; mobile scroll with keyboard. Card, Field, Input, Button, Separator, Alert, InputOTP, Dialog. Use audited auth provider and backend, not front-end fake login.
## Gates
Actual bootstrap -> admin login -> protected page -> logout -> relogin. Test authorization, recovery, callback cancellation, rate limit, safe redirects, cookies, autocomplete, keyboard, 200% zoom, responsive screenshots.
