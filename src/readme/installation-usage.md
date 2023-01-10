## Installation

There are a couple different ways to add this library:

### CDN

Skip the download, include the following code in your HTML right before `</head>`:

```html
<script src="https://unpkg.com/{{ pkg.name }}/dist/{{ pkg.details.stylizedName }}.js"></script>
```

### Manual Download

<a href="https://unpkg.com/{{ pkg.name }}/dist/{{ pkg.details.stylizedName }}.js">Download the file</a>, and include the following code in your HTML right before `</head>`:

```html
<script src="./your/scripts/path/{{ pkg.details.stylizedName }}.js"></script>
```

Of course, make sure the path points to where you put the script.

## Verifying Installation

To test that the library is installed correctly, create a demo instance with the following code by placing it right before your page's `</body>` tag:

```html
<script>
	const demo = bRando.create(); // creates a demo background changer
</script>
```

This will create a background changer with demo backgrounds on the `<body>` element. You should see something like this behind the main content:

<p align="center">
<img src="{{ screencap.src }}" alt="demo screencap" width="{{ screencap.width }}" height="auto"/>

## Usage

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
