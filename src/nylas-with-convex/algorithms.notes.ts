/**
--------------------------------------
------------  ALGORITHMS  ------------
--------------------------------------

ALGORITHMS TO SPECIFY
- Enumerating all user emails to determine footprint.
- Crafting a footprint from user emails.
  - Evaluating entity domain using "from" email addresses.
  - Entity merging: inferring single entity from multiple "from" addresses.
  - Entity type eg. newsletter, company, e.t.c
- Scheme for updating user footprint.
  - Updating changed data while initial scan is running.
  - Updating data after initial scan in completed.
- Determining footprint metrics from user's data
  - Kind of data shared eg. email, ...
  - Interaction types eg. welcome_email, password_reset, order_receipt, ...
  - Summary of interaction with an entity
- Comparing user entity footprints/digital traces.
- Getting the email for data reclaim request for a particular entity
- Determining appropriate reclaim action to suggest for user.
- Reclaim email templating.
- Auto-responding to entity emails
  - Detecting entity response
  - Determining feasibility of auto-response
  - Auto-response message templating
- Auto-detecting user data reclamation with entity
  - Keeping track of reclaim emails.
  - Analysing and determining data reclamation from emails.
- User data export format.

*/
export const ALGORITHMS = Symbol("ALGORITHMS")

/**
---------------------------------------------------
------------  ENUMERATING USER EMAILS  ------------
---------------------------------------------------

ENUMERATION PROCESS
- For Google provider, which is the only supported provider for now, we have:
  - Call the `GET /v3/grants/<NYLAS_GRANT_ID>/messages` endpoint to fetch 50
    user messages every 4 seconds. If it takes the function 2s to execute, then
    for 8k messages, it takes: 8000/(50/6) = 960s = 16 mins (not bad)
  - Note that the above makes sense since Google has a per-user quota limit of
    "250 quota units per user per second", according to this page:
    https://developers.google.com/gmail/api/reference/quota, and each call to
    `messages.list` takes a total of `5 quota units` (Gmail API).
  - The hard "50 messages per 4 seconds" above may be changed since every call
    to `messages.list` on GCP only take 5 quota units.
  - We retry requests with exponential backoff if we get rate limit errors. More
    on this in "Error Handling section".
  - Bandwidth usage error is reduced by only selecting fields that are
    absolutely needed in the requests to the APIs, using the Nylas `select`
    parameter for the `GET /v3/grants/<NYLAS_GRANT_ID>/messages` endpoint.
- As we progress with message enumeration, we update the user's view in realtime
  (by updating the DB) with the total number of messages that have been
  processed, so the user knows what to expect.

LINKS RELATING TO NYLAS/EMAIL LIMITS
+ https://developer.nylas.com/docs/dev-guide/provider-guides/imap/#provider-rate-limits:
  Provider rate limits
+ https://developer.nylas.com/docs/dev-guide/platform/rate-limits/: Rate limits
  in Nylas.
+ https://developer.nylas.com/docs/dev-guide/best-practices/rate-limits/:
  Avoiding rate limits in Nylas
+ https://developers.google.com/gmail/api/reference/quota: Gmail API usage
  limits

ISSUES THAT CAN BE ENCOUNTERED WHEN ENUMERATING USER EMAILS
+ Nylas or the email providers can rate-limit my API calls.
+ Too much data transmitted could potentially lead to bandwidth rate limits.

*/
export const ENUMERATING_USER_EMAILS = Symbol("ENUMERATING_USER_EMAILS")

/**
------------------------------------------------
------------  FOOTPRINT EVALUATION  ------------
------------------------------------------------

FOOTPRINT EVALUATION PROCESS
- 

FOOTPRINT NECESSITIES
- List of terms to compare subject lines against (derive from existing policies
  like the GDPR).
- Good system for matching subject lines with such terms.
- Allowing semantic search of up to 1000 most recent emails or past 30 days
  (whichever limit is hit first).

*/
export const FOOTPRINT_EVALUATION = Symbol("FOOTPRINT_EVALUATION")
