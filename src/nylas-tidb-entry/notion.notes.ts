/**

- [x]  Choose one project to work on.

    An application like **Mine** that lets users reclaim their data from
    companies.

- [ ]  Determine how Nylas and TiDB will help bring the project to life.
- [ ]  Determine the pages to be implemented in the app.
- [ ]  Specify the DB models.
- [ ]  Determine the way of handling errors.
- [ ]  Determine the system for checking actions in the app against granted
  scopes.
- [ ]  Determine app file and folder structure.
- [ ]  Create app assets like logo, and icon. (Also determine font)
- [ ]  Set up dev environment.
- [ ]  Setup Nylas.
- [ ]  Setup TiDB.
- [ ]  Implement features.
- [ ]  Do final touches on the app.
- [ ]  Write Dev article on the project.
- [ ]  Determine how to do demo video recording for the app.
- [ ]  Record demo video for Devpost.
- [ ]  Write Devpost project submission.

---

## How a user interacts with the app

→ User authenticates with the application.
[Notes](https://www.notion.so/TiDB-et-Nylas-Hackathon-Entry-a4eed2fe9b6d4e0b85e4d7fe268d3dd3?pvs=21)

→ User connects an email account to the app which is used with Nylas.
[Notes](https://www.notion.so/TiDB-et-Nylas-Hackathon-Entry-a4eed2fe9b6d4e0b85e4d7fe268d3dd3?pvs=21)

→ User can connect multiple email accounts as a form of multi-authentication.
[Notes](https://www.notion.so/TiDB-et-Nylas-Hackathon-Entry-a4eed2fe9b6d4e0b85e4d7fe268d3dd3?pvs=21)

→ User can revoke app access to email account whenever they want.
[Notes](https://www.notion.so/TiDB-et-Nylas-Hackathon-Entry-a4eed2fe9b6d4e0b85e4d7fe268d3dd3?pvs=21)

→ User can delete their account.

→ User specifies what kind of emails are received by the account.

→ App gives the user some predefined account types that user can choose from.

→ App imports user emails for a specified time period.

→ Users can configure the time period for which app analyses emails.

→ Users can read the emails through the app.

→ App categorizes emails based on intent into tags (e.g., inquiry, complaint,
feedback).

→ App analyzes emails for sentiment (positive, neutral, negative).

→ The sentiment score of each email is displayed alongside it.

→ App can group similar emails together based on intent to identify recurring
issues.

→ User accesses a dashboard to see summary of email groups, intents, sentiments
and charts.

→ User can query their emails using Natural Language.

→ User can respond to emails/email groups in the app.

→ App suggests responses for users to automatically respond to emails.

→ Users can add context, knowledge base to help app suggest better responses.

→ App offers to learn situations from responses written by users to to give
suggestions later.

→ User can export data analysed from emails into specific file formats for
sharing.

→ User can log out of the app.

---

### User Authentication

- [ ]  Specify user-related DB schema based on `lucia` spec.
- [ ]  Setup TiDB serverless with Drizzle ORM and Lucia.
- [ ]  Create user (or the appropriate DB table) on TiDB cloud.
- [ ]  Determine how to store authentication tokens on client.
- [ ]  Setup Google oauth for user login.
    - [ ]  Create GCP app for authentication.
    - [ ]  Determine Google API app scopes for auth and email functionalities.
      [Scopes](https://developer.nylas.com/docs/v3/auth/v3-scopes/)
    - [ ]  Allow user to select login only or connect email when logging in.
    - [ ]  Notify user that they can always link their email later.
    - [ ]  Use `lucia` with `arctic` to implement Google OAuth.
    - [ ]  Handle all error cases.
- [ ]  Redirect users away from auth page if they’re logged in already.
- [ ]  Redirect user away from authed private pages (if not authed) and to
  authed page, if already authed.

### Connecting Email Accounts with Nylas

- [ ]  Inform users that they’ll be exporting their email data for use on the
  app.
- [ ]  Let users configure if they want to keep seeing the notice.
- [ ]  Using a Google account (gmail.com or workspace account).
    - [ ]  Autheticate user via custom auth (not hosted), note that Lucia is
      handling auth.
    - [ ]  Use **Detect Provider** endpoing to ensure the email provided by user
      uses google.
    - [ ]  Take notes of usage limits, and handle errors related to them.
    - [ ]  Add One-click unsubscribe headers to **send message** and **create
      draft** requests. [More
      info](https://developer.nylas.com/docs/dev-guide/provider-guides/google/#one-click-unsubscribe-headers)

### Linking Multiple Email Accounts

- [ ]  Allow user to link multiple email accounts each with its own Nylas grant
  ID to the app.
- [ ]  Prompt user to transfer email data from one account to the other when
  they link email with grant ID linked to another account.
- [ ]  Require user to log in with the other account to transfer email data to
  current account.

### Deleting Linked Email Accounts

- [ ]  Allow user to delete linked email account (while triggers deletion of
  grant ID in Nylas).
- [ ]  Delete email data from server when user delete linked email account.

 */
