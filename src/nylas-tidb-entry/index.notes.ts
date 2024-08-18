/**
 * DONE: + (✓) UNDONE: *
 *
 * USE OF TiDB VECTOR SEARCH IN DATA RECLAMATION APP
 * -----------------------------------
 * - Similar emails from the same company.
 * - Similar emails from the other companies.
 * - Companies that send emails similar to particular email.
 * - Semantic search of emails from a company based on term.
 * - Semantic search of emails from from all companies.
 * - Companies that send emails relating to a term (based on semantic search).
 * - Predefined semantic search terms:
 *   - company_security_breach
 *   - user_account_breach
 *   - welcome_to_x
 *   - policy_change
 *   - your_receipt
 *   - expiration_of_(subscription/trial)
 * - Get terms that describe a company's emails in x time range.
 * - Get terms that describe all of the user's emails in x time range.
 * - Summary of what a company's emails have been about in the time range (gen
 *   AI RAG).
 * - Summary of the kind of emails a user has been receivingin x time range (gen
 *   AI RAG).
 * - Frequency of a particular term in a company's emails in x time range.
 * - Frequency of a particular term in all of user's emails in x time range.
 * - Comparative analysis of user's digital traces between two companies.
 *
 * SERVICES NEEDED FOR APP COMPLETION
 * ----------------------------------
 * - Email reading service        (Nylas)
 * - Vector DB/Normal DB          (TiDB)
 * - Company data from domain     --
 * - Mailing service              (Resend)
 * - Gen AI model                 --
 *
 * PROGRAMMING TOOLS NEEDED FOR APP COMPLETION
 * -------------------------------------------
 * - Auth                         (Lucia)
 * - Gen AI model API calls       --
 *
 * ISSUES WITH MINE (https://saymine.com)
 * --------------------------------------
 * + They don't include companies that aren't popular (with unknown data).
 * + For companies that don't accept email reclaims (according to them), they
 *   just give a link to one of the company's pages e.g. the privacy policy
 *   page. Once the link is clicked, they assume the data is reclaimed and
 *   remove it from the list of companies.
 * + They don't allow modifying of email template used to make reclaim request.
 * + They don't allow to mark specific companies as reclaimed manually.
 *
 * TYPES OF RECLAIMS
 * -----------------
 * - Send emails to contact email address of the company in question.
 * - Automatically find contact email of company from API.
 * - Allow user to provide company's contact email in special cases.
 * - Direct user to specific pages of the company's website and let them
 *   manually choose specific companies as reclaimed.
 *
 * THINGS TO DETERMINE
 * -------------------
 * + Data needed from companies API
 *   + Contact/Support email*
 *   + Social handles (particularly support)
 *   + Company name
 *   + Company logo
 *   + Parent company
 *   + Industry
 *   + Data breaches
 * - The process of processing user emails
 *   - Differentiating sent vs received emails.
 *   - First time processing vs updates
 *   - Company emails
 *   - Emails from email providers
 * - What happens when we can't get some company data
 * - How the reclamantion process works
 * - Storing the breach data
 * - Accessing company data from the breach data
 * - Free APIs to use in building the application
 * - Approach to authentication vs authorization to manage emails
 * - Determining if user still has app enabled (oauth scope granted or
 *   app-password active)
 * - Going about dev vs prod environments.
 * - How to read all of user's email data from their provider
 * - Data model for the application
 * - When to update and delete the list of user digital company footprints
 * - Getting user's name and profile image.
 * - When and how to update the data models used by the app
 * - When and how to delete the data models used by the app
 * - User data export.
 * - Extracting and storing breach data
 *   - Handling different kinds of entries in the data (companies, anonymous
 *     entries)
 *   - Storing websites with multiple entries
 *   - Allowing for updates
 *   - Auto-retry of indexing breach data
 *   - Logging of errors when there's issue with index update
 *
 * GETTING INFO OF A COMPANY
 * -------------------------
 * - For company breach info, data from https://haveibeenpwned.com/PwnedWebsites
 *   is used by extracting via scraping and storing in DB.
 * -
 */

/**
 * REQUIRED
 * + Domain: Always fetched from the "from" email address. Serve as link "href".
 * + Industry:
 *   + Default: Fetched from company API.
 *   + Fallback: null
 * - Name
 *   + Default: Fetched from company API.
 *   + Fallback: The domain is used as the name of the entity.
 * - Email:
 *   + Default: Fetched from reply-to email addresses on the messages processed.
 *   + Fallback: null. Encourage user to contact using social handles (if present).
 * - Logo:
 *   + Default: Fetch from logo.dev on demand.
 *   + Fallback: Find and use a fallback logo.
 *
 * FETCHED ABOUT A COMPANY
 * - Domain -- Fetched from "from" email address.
 * - Logo -- https://logo.dev :: Fallback to a predefined default
 * - Contact Emails -- From reply-to header of the messages.
 * - Name
 * - Industry
 * - Social handles
 */
