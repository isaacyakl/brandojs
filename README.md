<!-- ⚠️ This README has been generated from the file(s) "./src/readme/blueprint.md" ⚠️--><!-- prettier-ignore-start -->
<p align="center">
<img src="brandojs-demo-cap.webp" alt="demo screencap" width="640" height="auto"/>
</p>
<h1 align="center"><img src="logo.src" alt="" width="0" height="auto" /> bRando.js</h1>
<h2 align="center"><sub>Website background randomizer</sub></h2>
 
<!-- prettier-ignore-start -->
<p align="center">
<a href="https://www.npmjs.com/package/brandojs"><img alt="npm" src="https://img.shields.io/npm/v/brandojs?style=flat-square"></a> <a href="https://github.com/isaacyakl/brandojs/blob/master/dist/bRando.js"><img alt="GitHub file size in bytes" src="https://img.shields.io/github/size/isaacyakl/brandojs/dist/bRando.js?style=flat-square"></a> <a href="https://github.com/isaacyakl/brandojs/blob/master/LICENSE"><img alt="NPM" src="https://img.shields.io/npm/l/brandojs?style=flat-square"></a><!-- <img alt="npm type definitions" src="https://img.shields.io/npm/types/brandojs?style=flat-square"> -->
</p>
<p align="center">
<a href="https://www.npmjs.com/package/brandojs"><img alt="npm" src="https://img.shields.io/npm/dw/brandojs?style=flat-square"/></a>
<a href="https://libraries.io/npm/brandojs"><img alt="Libraries.io dependency status for latest release" src="https://img.shields.io/librariesio/release/npm/brandojs?style=flat-square"/></a>
<a href="https://brandojs.isaacyakl.com/coverage/lcov-report/"><img alt="coverage" src="./public/coverage/coverage.svg"/></a>
<a href="https://brandojs.isaacyakl.com"><img alt="GitHub deployments" src="https://img.shields.io/github/deployments/isaacyakl/brandojs/Production?label=site&style=flat-square"/></a>
</p>
<!-- prettier-ignore-end -->

<p align="center">
  <b>Automatically rotate through CSS backgrounds for any DOM element in a random or sequential order.</b><br>
</p>
<p align="center">
  <b>Compatibility:</b> ✔️Vanilla JavaScript ❌React.js (<a href="#-to-do">Coming soon</a>)<br>
  <b>Demo:</b> <a href="https://brandojs.isaacyakl.com">https://brandojs.isaacyakl.com</a>
</p>
<p align="center">
  <a href="https://twitter.com/isaacyakl"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/isaacyakl?style=social"></a> <a href="https://github.com/isaacyakl"><img alt="GitHub followers" src="https://img.shields.io/github/followers/isaacyakl?style=social"></a><br>
  <sub>Created by: <a href="https://github.com/isaacyakl">yak</a></sub>
<p>
<details>
<summary>📖 Table of Contents</summary>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Installation](#-installation)
	* [CDN](#cdn)
	* [Manual Download](#manual-download)
* [➤ Verifying Installation](#-verifying-installation)
* [➤ Usage](#-usage)
	* [ℹ️ Preload Images](#-preload-images)
	* [⚠️ Optimize Images](#-optimize-images)
* [➤ API Documentation](#-api-documentation)
* [➤ To-Do](#-to-do)
* [➤ Issues](#-issues)
* [➤ License](#-license)
</details>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#installation)

## ➤ Installation

There are a couple different ways to use this library:

### CDN

Skip the download, include the following code in your HTML right before `</head>`:

```html
<script src="https://unpkg.com/brandojs@latest/bRando.js"></script>
```

### Manual Download

Download the file, and include the following code in your HTML right before `</head>`:

```html
<script src="./your/scripts/path/bRando.js"></script>
```

Of course, make sure the path points to where you have your scripts.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#verifying-installation)

## ➤ Verifying Installation

To test that the library is installed correctly, create a demo instance with the following code placed right before the page's `</body>` tag:

```html
<script>
	let demo = bRando.create(); // creates a demo background rotator
</script>
```

This will create a background rotator with demo backgrounds on the `<body>` element. You should see something like this behind the main content:

<p align="center">
<img src="brandojs-demo-cap.webp" alt="demo screencap" width="640" height="auto"/>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#usage)

## ➤ Usage

Create a new background rotator by calling the `create()` function on the `bRando` library and pass it an `options` object containing the desired settings.

```javascript
let options = {
	CSSSelector: "main", // a valid CSS selector (multiple elements are allowed)
	backgrounds: [
		// valid CSS background properties
		"aqua", // solid color
		"linear-gradient(80deg, #0864c8 25%, #588fca 75%)", // gradient
		`url("somewhere/some-image.jpg") center/cover no-repeat`, // image
		`background: center / contain no-repeat url("../../media/examples/firefox-logo.svg"),
        #eee 35% url("../../media/examples/lizard.png")`, // everything
	],
	timeout: 5000, // time between changes in milliseconds
	random: true, // whether to go through the backgrounds randomly or not (no two backgrounds are allowed to be back-to-back)
	transition: "500ms ease-in", // a CSS transition property for changing between backgrounds
};

let bgRotator = bRando.create(options); // create background rotator with the options set above

// call next() if you want the page to load with one of the backgrounds immediately
bgRotator.next(); // remove this line if you want a smooth first transition
```

All options are optional. Default values and further details for them can be found in the <a href="https://brandojs.isaacyakl.com/docs/">API documentation</a>.

### ℹ️ Preload Images

> Be sure to [preload any images](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) used as backgrounds before creating the background rotator or your end-user may have partially loaded background images. There are [a few ways to do this](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload). For example, you could add preload `<link>` tags in the `<head>` of your document:
>
> ```html
> <link rel="preload" href="some-image-used-as-a-background1.jpg" as="image" />
> <link rel="preload" href="some-image-used-as-a-background2.jpg" as="image" />
> <link rel="preload" href="some-image-used-as-a-background3.jpg" as="image" />
> ```

### ⚠️ Optimize Images

> Always optimize images used as backgrounds so that your end-user does not have to experience partially loaded background images. Use something like [imagecompressor.com](https://imagecompressor.com) which even allows you to adjust quality settings and compress level for each image.



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#api-documentation)

## ➤ API Documentation

[Full documentation](https://brandojs.isaacyakl.com/docs/)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#to-do)

## ➤ To-Do

Features and fixes planned for development.

-  Complete API documentation
-  Stop next() from being callable after remove() is called
-  Add console feedback for invalid options
-  Add event hooks: onChange()
-  Warn users about setting transition animations time > timeout in both usage section and console
-  Add previous()
-  Create React component
-  Update year date in LICENSE automatically



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#issues)

## ➤ Issues

Found a 🐛? Create a [new issue](https://github.com/isaacyakl/brandojs/issues/new).


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).

<!-- prettier-ignore-end -->
