/**
--------------------------------------
--------  CONVEX CONVENTIONS  --------
--------------------------------------

CONCERNING CONVEX CONVENTIONS
+ Naming, structuring and using the ff
  + convex queries
  + convex mutations
  + convex actions
  + convex HTTP actions
  + nextjs server actions
  + nextjs route handlers
+ Using `convex` and `src` (directory structure)

CONVEX CONVENTIONS
+ Handlers don't reflect database models e.g. `getMessage`, `listMessages`, etc.
+ Queries, mutations and actions use OOP-like structuring. Names of internal
  function namespaces begin with an underscore, and actions that require Node.js
  runtime are prefixed with `node_`. Some examples are as follows:
  + `api.likes._mutations.doStuff`
  + `api.likes._queries.doStuff`
  + `api.likes._actions.doStuff`
  + `api.likes._node_actions.doStuff` (has "use node" at top of file)
  + `api.likes.mutations.doStuff`
  + `api.likes.queries.doStuff`
  + `api.likes.actions.doStuff`
  + `api.likes.node_actions.doStuff`
+ Since convex requires explicitly stating helpers that require Node.js runtime,
  the ff naming conventions are in place:
  + `server/node/...` (every file has "use node" at the the top)
  + `server/...` (files not requiring Node-specific APIs)
  + `shared/...` (should not have shared/node since it's shared with client)
+ Use Convex queries/mutations/actions instead of server actions
+ Use Convex HTTP actions instead of Next.js route handlers (10 minutes timeout
  is also an advantage with Convex actions).
+ As for using `src` and `convex` directories together, we set the following in
  the `convex.json` file: { "functions": "src/convex" }
+ Using the above config, we then set `"@/": "./src/*"` in both tsconfig and
  eslint, and use `parserOptions.projectService = true` with eslint to use
  closest `tsconfig.json`file.

USEFUL LINKS
+ Endpoints that are not available for use with convex actions:
  https://discord.com/channels/1019350475847499849/1276206894867812515/1276239251263979521

*/
export const CONVENTIONS = Symbol("CONVENTIONS")
