/**
 * COMPANY DATA APIS FOUND
 * + https://docs.abstractapi.com/company-enrichment: AbstractAPI gives
 *   everything except parent company. Might not have enough data. Doesn't give
 *   data on `grey.co`, `kuda.com`, so it's probably not worth it.
 *                                   ---
 * + https://docs.fullcontact.com/docs/company-enrich-overview: FullContact
 *   provides all of the data except for parent company. Doesn't have a pricing
 *   page. Expects to talk to sales.
 * + https://coresignal.com/solutions/company-enrichment-api/: Doesn't return
 *   logo, emails, social handles.
 * + https://www.thecompaniesapi.com/api#companies-enrich-from-domain: Doesn't
 *   return company emails. It also returns company industry in dashed string
 *   e.g "internet-marketing" instead of "Internet Marketing" making it hard to
 *   work with, but maybe we can get around it.
 * + https://docs.enrichmentapi.io/company-api: Return only LinkedIn social
 *   handle. Doesn't return email.
 * + https://docs.enrich.so/reference/company-lookup: Returns somewhat
 *   inaccurate data and doesn't return email/social handles except LinkedIn.
 * + https://dashboard.clearbit.com/docs#enrichment-api-company-api: Clearbit
 *   doesn't seem to be accepting signups (for free API calls).
 * + https://docs.peopledatalabs.com/docs/company-schema: PeopleDataLabs doesn't
 *   export logos and they also don't export emails.
 * + https://www.lusha.com/docs/#company-bulk-api: Lusha company (bulk) API
 *   doesn't provide emails and doesn't give industry which is not very good.
 * + https://nubela.co/proxycurl/docs#company-api-company-lookup-endpoint:
 *   Proxycurl doesn't return email addresses, and company social handles. Also
 *   returns `profile_pic_url` which I'm not sure if it's the logo or not.
 * + https://www.demandbase.com/pricing/: DemandBase requires talking to sales.
 * + https://www.datanyze.com/: Datanyze outright blocks me from accessing.
 * + https://www.data-axle.com/our-data/apis/: Only gives data of US and
 *   Canadian businesses.
 * + https://snov.io/api: Snov.io doesn't seem to give company data. Just email
 *   lookup from domains.
 * + https://www.leadgenius.com/products: LeadGenius is a customer platform and
 *   doesn't really do company data enrichment.
 * + https://developer.mattermark.com/reference/get_company: Only has 4m company
 *   data and only 100 free API calls. Also doesn't look like it's the best to
 *   settle with.
 * + https://data.crunchbase.com/docs/using-entity-lookup-apis: CrunchBase has
 *   no free plan, and even the pro plan doesn't have API access.
 * + https://hginsights.com/solutions/products/hg-insights-platform: HG Insights
 *   doesn't base on providing company data enrichment API.
 * + https://www.leadspace.com/: Leadspace doesn't seem to give company data.
 *   Instead, they take it and conect it to CRM which is not what we're looking
 *   for.
 * + https://www.zoominfo.com/solutions/data-as-a-service/enterprise-api: Blocks
 *   me without getting to see anything.
 * + https://www.melissa.com/developer/business-coder: Doesn't seem to be what
 *   we're looking for as it only gives US company data and the API docs is not
 *   very clear.
 */
