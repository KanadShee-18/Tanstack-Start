## .tanstack

- This is the folder where all file is going to be compiles just as .next in a next js project.

# Starting Point:

## router.tsx:

- Here it basically creates the router for the app which is actually going to be used by the tanstack start.
- We can also make `defaultPreload` as `intent` to preload `Link` components on hover just how its works in next.js.

### Here is a thing called, `defaultPreloadStaleTime: 0,`, which means:

```txt

Preloaded data = data fetched in advance for a route

Stale time = how long that preloaded data is trusted

If navigation happens within the stale time
→ use preloaded data
→ no new fetch

If navigation happens after the stale time
→ preloaded data is stale
→ fetch fresh data

stale means old enough to not trust

defaultPreloadStaleTime: 0
→ never trust preloaded data
→ always fetch again

defaultPreloadStaleTime: 30_000
→ trust preloaded data for 30 seconds

```

## Also one more thing, `routeTree.gen.ts`:

- It is created by the tanstack router it self.
- It basically map all the routes, file, folders everything.
- So that when we link in some component, if something wrong happended, it can show us the error.

---

# Main Application:

## `routes > index.tsx`:

- this is the file which is quite like the page.tsx in next.js.
- Here we also createroute and render the component.
- Thats how in tanstack start we create route and render component.

## `routes > _root.tsx`:

- This is quite like layout.tsx in next.js
- Here, inside the `createRootRoute`, we can define `metadata` in the head tag.
- And we can see all the `HTML`, its `body` and also `scripts` written in this application are wrapped in this particular component.

---

## `data` folder:

- here, we write server actions.
- And not like next js only supports post methods in the server actions it allow `GET`, `POST` both.

---

## components:

- where all components will be to use in our pages.

## prettier.config.ts:

- Prettier fomatter config help to format code in a better way.

---

## Routing:

- It also follows file based routing.
- So, in the routes folder, how we make our specific folders, routes are made as like that.

---
