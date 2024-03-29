<!-- ⚠️ This README has been generated from the file(s) "./src/readme/blueprint.md" ⚠️--><!-- prettier-ignore-start -->
<p align="center">
<img src="brandojs-demo-cap.webp" alt="demo screencap" width="640" height="auto"/>
</p>
<h1 align="center"><img src="logo.src" alt="" width="0" height="auto" /> bRando.js</h1>
<h2 align="center"><sub>Website background randomizer</sub></h2>
 
<!-- prettier-ignore-start -->
<p align="center">
<a href="https://www.npmjs.com/package/brandojs"><img alt="npm" src="https://img.shields.io/npm/v/brandojs?style=flat-square"></a> <a href="https://github.com/isaacyakl/brandojs/blob/master/dist/bRando.js"><img alt="GitHub file size in bytes" src="https://img.shields.io/github/size/isaacyakl/brandojs/dist/bRando.js?style=flat-square"></a> <a href="https://github.com/isaacyakl/brandojs/blob/master/LICENSE"><img alt="NPM" src="https://img.shields.io/npm/l/brandojs?style=flat-square"></a>
</p>
<p align="center">
<a href="https://www.npmjs.com/package/brandojs"><img alt="npm" src="https://img.shields.io/npm/dw/brandojs?style=flat-square"/></a>
<a href="https://libraries.io/npm/brandojs"><img alt="Libraries.io dependency status for latest release" src="https://img.shields.io/librariesio/release/npm/brandojs?style=flat-square"/></a>
<a href="https://brandojs.isaacyakl.com/coverage/lcov-report/"><img alt="coverage" src="./src/readme/coverage.svg"/></a>
<a href="https://brandojs.isaacyakl.com"><img alt="GitHub deployments" src="https://img.shields.io/github/deployments/isaacyakl/brandojs/Production?label=site&style=flat-square"/></a>
</p>
<!-- prettier-ignore-end -->

<p align="center">
  <b>Automatically change CSS backgrounds on any DOM element in a random or sequential order.</b><br>
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

* [➤ Intro](#-intro)
* [➤ Approach](#-approach)
* [➤ Installation](#-installation)
	* [CDN](#cdn)
	* [Manual Download](#manual-download)
* [➤ Verifying Installation](#-verifying-installation)
* [➤ Usage](#-usage)
	* [ℹ️ Preload Images](#-preload-images)
	* [⚠️ Optimize Images](#-optimize-images)
* [➤ API Documentation](#-api-documentation)
* [➤ To-Do](#-to-do)
	* [Planned](#planned)
	* [Ideas](#ideas)
* [➤ Issues](#-issues)
* [➤ License](#-license)
</details>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#intro)

## ➤ Intro

Would you like to...

-  Randomly change backgrounds on your website?
-  Smoothly rotate through a collection of CSS background images, colors, and/or gradients?
-  Change backgrounds on 1337 elements simultaneously?! (not recommended but doable 😂)
-  Impress your website visitors?

Try out bRando.js!

The bRando.js library lets you specify what HTML element(s) to add a background changer to, what CSS backgrounds to use, and more. It is usable in the browser and more environments are coming soon.



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#approach)

## ➤ Approach

bRando.js utilizes the pseudo-element [::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) and [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to facilitate smooth transitions. Background changer instances follow this approach:

1. Create an ::after style definition with CSS variables and the chosen transition settings in order to update ::after backgrounds.
2. Set subsequent backgrounds on the selected element(s) and corresponding ::after('s) in an alternating manner.
3. Toggle the opacity of the ::after element(s) to switch between the ::after background and element background.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#installation)

## ➤ Installation

There are a couple different ways to add this library:

### CDN

Skip the download, include the following code in your HTML right before `</head>`:

```html
<script src="https://unpkg.com/brandojs/dist/bRando.js"></script>
```

### Manual Download

<a href="https://unpkg.com/brandojs/dist/bRando.js">Download the file</a>, and include the following code in your HTML right before `</head>`:

```html
<script src="./your/scripts/path/bRando.js"></script>
```

Of course, make sure the path points to where you put the script.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#verifying-installation)

## ➤ Verifying Installation

To test that the library is installed correctly, create a demo instance with the following code by placing it right before your page's `</body>` tag:

```html
<script>
	const demo = bRando.create(); // creates a demo background changer
</script>
```

This will create a background changer with demo backgrounds on the `<body>` element. You should see something like this behind the main content:

<p align="center">
<img src="brandojs-demo-cap.webp" alt="demo screencap" width="640" height="auto"/>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#usage)

## ➤ Usage

Create a new background changer by calling the [`create()`](https://brandojs.isaacyakl.com/docs/functions/create.html) function from the bRando library and passing it an [`options`](https://brandojs.isaacyakl.com/docs/interfaces/Options.html) object containing the desired settings.

```javascript
const options = {
	CSSSelector: "main", // A CSS selector
	// An array of CSS backgrounds
	backgrounds: [
		"aqua", // solid color
		"linear-gradient(80deg, #0864c8 25%, #588fca 75%)", // gradient
		`url("somewhere/some-image.jpg") center/cover no-repeat`, // image
		`center / contain no-repeat url("../../media/examples/firefox-logo.svg"),
        #eee 35% url("../../media/examples/lizard.png")`, // everything
	],
	timeout: 5000, // The time between background changes in milliseconds
	random: true, // Whether to rotate through the backgrounds randomly or not
	transition: "500ms ease-in", // A CSS transition to be used when changing between backgrounds
};

const bgChanger = bRando.create(options); // create background changer with the options set above

// call next() if you want the page to load with one of the backgrounds immediately
bgChanger.next(); // remove this line if you want a smooth first transition
```

[All options](https://brandojs.isaacyakl.com/docs/interfaces/Options.html) are optional and have default values if they are not included in the options object.

Learn how to control the background changer that is returned by referring to [the bRando class documentation](https://brandojs.isaacyakl.com/docs/classes/bRando.html).

### ℹ️ Preload Images

> Be sure to [preload any images](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) used as backgrounds before creating the background changer or your end user may see partially loaded background images. There are [a few ways to do this](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload). For example, you could add preload `<link>` tags in the `<head>` of your document:
>
> ```html
> <link rel="preload" href="some-image-used-as-a-background1.jpg" as="image" />
> <link rel="preload" href="some-image-used-as-a-background2.jpg" as="image" />
> <link rel="preload" href="some-image-used-as-a-background3.jpg" as="image" />
> ```

### ⚠️ Optimize Images

> Always optimize any images used as backgrounds to minimize the chance that your end user sees partially loaded background images. Use something like [imagecompressor.com](https://imagecompressor.com) which allows you to adjust quality settings and a compression level for each image.



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#api-documentation)

## ➤ API Documentation

[Full documentation](https://brandojs.isaacyakl.com/docs/)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#to-do)

## ➤ To-Do

### Planned

Features and fixes planned for development.

-  Create React component

### Ideas

Ideas I have thought up but will not add unless [requested](https://github.com/isaacyakl/brandojs/issues/new/choose).

-  Add event hooks:
   -  onChange()
   -  afterChange()
-  Add previous()

Have a feature request? Create a [new issue](https://github.com/isaacyakl/brandojs/issues/new/choose) and select the "Feature request" type OR write the feature yourself and create a pull request.



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#issues)

## ➤ Issues

Found a 🐛? Create a [new issue](https://github.com/isaacyakl/brandojs/issues/new/choose) or propose a fix by creating a pull request.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).

<!-- prettier-ignore-end -->
