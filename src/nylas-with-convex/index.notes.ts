/**
--------------------------------------
--------------  NOTES  ---------------
--------------------------------------

THINGS TO DEFINE
+ App features
+ Auth principle
+ Convex conventions
- Algorithms
- Pages/endpoints
- Data Models
- Error handling
- Notifications/emails

QUICK NOTES
+ Vector search (normally a query) in only available in actions.
+ Vector search isn't reactive so special technique is required.
+ Next.js specific things like `import "server-only"` not in Convex.
+ When using Convex for actions, the domain of the actions and that of my
  frontend won't be equal (by default), so cookies might not be sent to actions
  if used inline for images as in `${CONVEX_SITE_URL}/img/some-image-id`. This
  could potentially be solved by proxying the convex endpoints with my Next.js
  endpoints. However, this could require passing cookies as URL params.
+ When using `@convex-dev/auth/nextjs`, Convex auth also stores the values
  (access and refresh token) in cookies (only refresh_token is stored as
  httponly though) so they're accessible from Next.js server.

*/
export const NOTES = Symbol("NOTES")
