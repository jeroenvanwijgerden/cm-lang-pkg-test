in `lang-example/`
```
npm i rollup-plugin-ts
rollup -c
```

in `editor/`
```
npm install --save ../lang-example
npm i rollup-plugin-ts
rollup -c
```

open `editor/index.html` in a browser.

The language package works, there is syntax highlighting and folding.

In `editor/`, if you
- in `editor.js`
  - uncomment line 3
  - comment line 4
- `rollup -c`
- reload `index.html`

there no longer is syntax highlighting and folding.

It seems that although `{dedupe:["@codemirror/state"]}` in `editor/rollup.config.js` is necessary (try to `rollup -c` and reload `index.html` without it), including the language package this way (as a dependency) instead of a `.js` file in the root of the editor project makes it not have any behavior, nor cause errors.
