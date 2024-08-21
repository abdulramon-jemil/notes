/*
---------------------------------------
--------------  NEXTJS  ---------------
---------------------------------------

CODE EXECUTION
- Server: server components / route handlers / middleware / server actions
- Client: client components

FETCH API CACHING/MEMOIZATION
- fetch() is memoized across a single render pass for
  - Server components e.g. Layout / Page
  - generateStaticParams()
  - generateMetadata()
- fetch() can access Next.js data cache in
  - Server components (res = memo ? memo : cached ? cached : await request())
  - Server actions
  - Route handlers

DATA FETCHING / CACHING / REVALIDATION
- Server components:
  - Fetching: fetch() / ORM / DB client / others
  - Caching: FetchOptions.cache / React.cache / unstable_cache
  - Revalidation:
    - Fetch.next.tags
    - Fetch.next.revalidate
    - revalidateTag 
    - revalidatePath
- Client components:
  - Fetching: browser fetch() + Route handlers + Query library
  - Caching: Query library cache
  - Revalidation: Query library revalidation
- Middleware:
  - Fetching: fetch() / others
  - Caching: -- (not sure if FetchOptions.cache works here)
  - Revalidation: -- (not possible)
- Route handlers:
  - Fetching: fetch() / ORM / DB client / others
  - Caching: -- FetchOptions.cache / unstable_cache
  - Revalidation: fetch.next.(revalidate,tags) / revalidateTag / revalidatePath
- Server actions:
  - Fetching: fetch() / ORM / DB client / others
  - Caching: -- FetchOptions.cache / unstable_cache
  - Revalidation: fetch.next.(revalidate,tags) / revalidateTag / revalidatePath

FACTORS FOR CACHING/REVALIDATION
- Caching
  - Route segment config: dynamic / fetchCache / revalidate
  - dynamic accessors (refs/functions)
    - cookies()
    - headers()
    - unstable_after()
    - unstable_noStore()
    - PageProps.searchParams
  - FetchOptions.cache
- Revalidation
  - Route segment config: revalidate
  - FetchOptions.next.revalidate
  - FetchOptions.next.tag
  - revalidateTag
  - revalidatePath
- Non-determinants (do not affect static/dynamic rendering for routes)
  - unstable_cache
  - React.cache
  - useSearchParams
  - Route segment config: dynamicParams
  - generateMetadata()
  - generateStaticParams()

STATIC/DYNAMIC ROUTES DETERMINATION
- Dynamic: If not static
- Static: If one of the ff is true
  - routeConfig.dynamic="force-static"
  - routeConfig.dynamic="error"
  - routeConfig.dynamic="auto" + no dynamic accessors +
    every.FetchOptions.cache="force-cache" +
    every.FetchOptions.next.revalidate!=0 + routeConfig.revalidate!=0

STATIC VS DYNAMIC ROUTES
- Static: Rendered at build time or at revalidation time.
- Dynamic: Rendered at each request time.

NOTES ON STATIC/DYNAMIC ROUTES DETERMINATION
- Values that can affect `FetchOptions.cache` `FetchOptions.next.revalidate`
  - routeConfig.dynamic
  - routeConfig.fetchCache
  - routeConfig.revalidate
- useSearchParams affects type of client component, not type of route
- generateMetadata() can use Next.js fetch but doesn't affect rendering type
- dynamicParams / generateStaticParams() affect paths list not path types
- Revalidatable route is static
- Dynamically rendered routes can have cached data, see link below

STATIC/DYNAMIC COMPONENTS DETERMINATION
- Server components:
  - Static: route is static
  - Dynamic: route is dynamic
- Client components:
  - Static: route is static
  - Dynamic: route is dynamic / uses useSearchParams()

STATIC VS DYNAMIC COMPONENTS
- Server components
  - Static: Can't / doesn't use dynamic accessors
  - Dynamic: Can use dynamic functions. The component from `page.tsx` can also
    use the `searchParams` props.
- Client components
  - Static: Can't use useSearchParams()
  - Dynamic: Can use useSearchParams() + used with <Suspense />

STATIC VS DYNAMIC COMPONENTS: BUILD TIME VS RUNTIME
- Server components
  - Static: (cached fetch / no dynamic function) / (trigger by revalidation)
    - Build time: component -> rsc payload -- (prerendering)
    - Runtime: rsc payload downloaded/rendered -- (no hydration)
  - Dynamic: (uncached fetch / dynamic function)
    - Build time: --
    - Runtime: component -> rsc payload -> downloaded/rendered -- (no hydration)
- Client components -- static/dynamic
  - Build time: component -> static HTML -- (prerendering)
  - Runtime:
    - Full load: sHTML downloaded/rendered -> code downloaded -> sHTML hydrated
    - Navigation: component/code downloaded -> component rendered/hydrated

NOTES ON STATIC/DYNAMIC COMPONENTS DETERMINATION
- If the route is determined to be dynamic, the whole route (all components) are
  rendered dynamically, not just some. We are expected to use cached datato
  optimize performance by using the caching APIs eg. FetchOptions.cache,
  FetchOptions.next.revalidate, unstable_cache, etc.

RENDERING STRATEGIES
- SSR: Dynamic route
- CSR: Static route + client API calls
- SSG: Static route
- ISR: Static route + path/tag revalidation

STREAMING UI
- Client components:
  - Static: (not used with <Suspense />)
  - Dynamic: If the route is static, the fallback is returned in the initial
    HTML coming from the server, and then replaced with the actual client
    component when React hydrates the component on the browser and Next.js gives
    it the appropriate search params. If the route is dynamic, the search params
    are directly available for the client component on the server.
- Server components:
  - Static: (not used with <Suspense />)
  - Dynamic: For server components, the fallback is returned while the
    async server component is awaited, and then used to replace the fallback
    when ready.

LINKS
- generateStaticParams / static render of paths on first visit:
  https://nextjs.org/docs/app/building-your-application/caching#generatestaticparams
- Dynamic routes with cached data
  https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering

RANDOM NOTES
- error.js/global-error.js: always client components
- loading.js: server/client component used with <Suspense /> to wrap component
  <Page /> to enable streaming.
- Suspense is used with server or client components (yes, client component) as
  children.

*/
export const NEXTJS = Symbol("NEXTJS")
