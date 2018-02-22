# Razzle + After.js Boilerplate

Universal JavaScript applications are tough to setup. Either you buy into a framework like [Next.js](https://github.com/zeit/next.js) or [react-server](https://github.com/redfin/react-server), fork a boilerplate, or set things up yourself. Aiming to fill this void, Razzle is a tool that abstracts all complex configuration needed for SSR into a single dependency--giving you the awesome developer experience of [create-react-app](https://github.com/facebookincubator/create-react-app), but then leaving the rest of your app's architectural decisions about frameworks, routing, and data fetching up to you. With this approach, Razzle not only works with React, but also Reason, Elm, Vue, Angular, and most importantly......whatever comes next.

**Razzle comes with the "battery-pack included"**:

* :fire: Universal Hot Module Replacement, so both the client and server update whenever you make edits. No annoying restarts necessary
* Comes with your favorite ES6 JavaScript goodies (through `babel-preset-razzle`)
* Comes with the same CSS setup as [create-react-app](https://github.com/facebookincubator/create-react-app)
* Works with [React](https://github.com/facebook/react), [Preact](https://github.com/developit/preact), [Elm](http://elm-lang.org/), [Reason-React](https://github.com/jaredpalmer/razzle/tree/master/examples/with-reason-react), [Inferno](https://github.com/infernojs), and [Rax](https://github.com/alibaba/rax) as well as [Angular](https://github.com/angular/angular) and [Vue](https://github.com/vuejs/vue) if that's your thing
* Escape hatches for customization via `.babelrc`, `.eslintrc` and `razzle.config.js`
* [Jest](https://github.com/facebook/jest) test runner setup with sensible defaults via `razzle test`

After.js enables Next.js-like data fetching with any React SSR app that uses React Router 4.

## Development

```bash
yarn # install dependencies
yann start # run development server
```

## Author

* Jared Palmer [@jaredpalmer](https://twitter.com/jaredpalmer)

## Docs

* [Razzle](https://github.com/jaredpalmer/razzle)
* [After.js](https://github.com/jaredpalmer/after.js)
