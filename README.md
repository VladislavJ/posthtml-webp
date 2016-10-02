# PostHTML Plugin Boilerplate <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Build][build]][build-badge]
[![Coverage][cover]][cover-badge]
[![Standard Code Style][style]][style-url]
[![Chat][chat]][chat-badge]

This plugin add webp supporting in your html.

Before:
``` html
<img src="image.jpg">
```

After:
``` html
<picture>
    <source type="image/webp" srcset="image.jpg.webp">
    <img src="image.jpg">
</picture>
```

## Install

> npm i posthtml posthtml-webp

## Usage

``` js
const fs = require('fs');
const posthtml = require('posthtml');
const posthtmlWebp = require('posthtml-webp');

posthtml()
    .use(posthtmlWebp())
    .process(html/*, options */)
    .then(result => fs.writeFileSync('./after.html', result.html));
```