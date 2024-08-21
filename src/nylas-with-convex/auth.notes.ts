/**
--------------------------------------
----------  AUTH PRINCIPLE  ----------
--------------------------------------

AUTHENTICATION
- User can sign in using any of the provided methods (only G-OAuth for now)
- After signing in, user links an email address to the account to start scan and
  use with the app. Normally, such email address can be of various types
  supported by Nylas, including Google Gmail, Microsoft (Outlook and Exchange),
  iCloud, Yahoo, etc. However, for now, only Google Gmail will be supported.
- We don't store user credentials in any way whatsoever. Once user
  authenticates, they get redirected to a page which initializes their Nylas
  grant_id (which is saved in DB), and then other requests to manage user email
  are done with private NYLAS API keys.

DATA ACCESS
- User can access any stored data about linked account after they've linked it,
  and we've gotten a valid grant_id from Nylas.
- Linked account transfer can be initiated by any logged in user for any linked
  email address, as far as they can provide correct credentials to verify they
  actually have access to the account. Verification can be done by sending a
  link and letting the new user access the email to click the link, or by
  letting them go through the account linking process.
- We don't require verification/permission from the user owning the account the
  email was previously linked to because it is possible that they are the
  attacker so the real owner won't be able to complete such verification and
  thus, won't be able to use their email with the app.
- The security mechanism is that an email account owner is notified whenever
  their email address is linked to a user account or transferred to another user
  account. If they didn't initiate the email address linking or transfer, they
  can simply go change their email account password and optionally remove the
  app's access to their account from their provider (via a dashboard in the case
  of OAuth eg. Google), or reset/delete app password in the case of IMAP.

*/
export const AUTH_PRINCIPLE = Symbol("AUTH_PRINCIPLE")
