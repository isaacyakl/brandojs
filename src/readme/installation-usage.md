## Installation

There are a couple different ways to use this library:

### CDN

Skip the download by including the following code in your HTML right before `</head>`:

```html
<script src="https://unpkg.com/{{ pkg.name }}@latest/{{ pkg.details.stylizedName }}.js"></script>
```

### Manual Download

Download the file and include the following code in your HTML right before `</head>`:

```html
<script src="./some/scripts/path/{{ pkg.details.stylizedName }}.js"></script>
```

### NPM

Install this package via NPM:

```javascript
npm i -D {{ pkg.name }}
```

and include the following code in your HTML right before `</head>`:

```html
<script src="./node_modules/{{ pkg.name }}/dist/{{ pkg.details.stylizedName }}.js"></script>
```

## Verifying Installation

To test that the library is installed correctly, create a demo instance with the following code:

```html
<script>
	// wait for page to finish loading
	window.addEventListener("load", () => {
		let demo = bRando.create(); // creates a demo background rotator
	});
</script>
```

This will create an instance with demo backgrounds on the `<body>` element. You should see something like this:

```
///////////////////////////////////////
       INSERT SCREENSHOT GIF
///////////////////////////////////////
```

## Usage

Create a new background rotator by calling the `create()` function on the `bRando` library and pass it an `options` object containing the desired settings.

```javascript
<script>
    let options = {
        CSSSelector: "main", // a valid CSS selector (multiple elements are allowed)
        backgrounds: [ // valid CSS background properties
            "aqua", // solid color
            "linear-gradient(80deg, #0864c8 25%, #588fca 75%)", // gradient
            `url("somewhere/some-image.jpg") center/cover no-repeat`, // image
            `background: center / contain no-repeat url("../../media/examples/firefox-logo.svg"),
            #eee 35% url("../../media/examples/lizard.png")` // everything
        ],
        timeout: 5000, // time between changes in milliseconds
        random: true, // whether to go through the backgrounds randomly or not (no two backgrounds are allowed to be back-to-back)
        transition: "500ms ease-in", // a CSS transition property for changing between backgrounds
    }

	window.addEventListener("load", () => { // wait for page to finish loading
		let bgRotator = bRando.create(options); // create background rotator with the options set above

        // call next() if you want the page to load with one of the backgrounds
        bgRotator.next(); // remove this line if you want a smooth transition to the first background
	});
</script>
```

All options are optional. Default values and further details for them can be found in the [API documentation]({{ pkg.homepage }}/docs/).

### ℹ️ Preload Images

> Be sure to [preload any images](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) used as backgrounds before creating the background rotator or your end-user may have partially loaded background images. There are [a few ways to do this](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload). For example, you could add preload `<link>` tags in the `<head>` of your document:
>
> ```html
> <link rel="preload" href="some-image-used-as-a-background1.jpg" as="image" />
> <link rel="preload" href="some-image-used-as-a-background2.jpg" as="image" />
> <link rel="preload" href="some-image-used-as-a-background3.jpg" as="image" />
> ```

### ⚠️ Optimize Images

> Always optimize images used as backgrounds so that your end-user does not have to experience partially loaded background images. Use something like [https://imagecompressor.com](https://imagecompressor.com) which even allows you to adjust quality settings and compress level for each image.
