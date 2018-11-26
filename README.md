# PostCSS Muy Importante [![Build Status][ci-img]][ci]

[PostCSS] plugin that lets you write '!muy-importante' instead of 'important'.

[postcss]: https://github.com/postcss/postcss
[ci-img]: https://travis-ci.org/WesselKuipers/postcss-muy-importante.svg
[ci]: https://travis-ci.org/WesselKuipers/postcss-muy-importante

```css
.foo {
    color: red !muy-importante;
}
```

```css
.foo {
    color: red !important;
}
```

## Usage

```js
postcss([require("postcss-muy-importante")]);
```

See [PostCSS] docs for examples for your environment.
