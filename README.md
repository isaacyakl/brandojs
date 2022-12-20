![bRando.js Screenshot](brandojs-ss1-cover.gif)

# bRando.js

A CSS background changer capable of transitioning sequentially or randomly between images, colors, and gradients.

Demo: [https://isaacyakl.github.io/brandojs/](https://isaacyakl.github.io/brandojs/)

Distributed under the [MIT License](https://isaacyakl.github.io/brandojs/LICENSE).

Show support by following me on [Twitter](https://www.twitter.com/isaacyakl) and [GitHub](https://github.com/isaacyakl).

Found a 🐛? Create a [new issue](https://github.com/isaacyakl/brandojs/issues/new).

## Release Notes

### v0.1.3

-  Published to NPM 🥳
-  Added CDN instructions to README

### v0.1.2

-  Added a gradient to the demo and README

### v0.1.1

-  Added support for the CSS background property [https://developer.mozilla.org/en-US/docs/Web/CSS/background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
-  Added To-Do list

## Usage

### Include bRando.js

Include a copy of bRando.js via one of the following methods.

#### CDN

If you do not want to download bRando.js, include the following code right before the closing `</body>` tag:

```html
<script type="text/javascript" src="https://unpkg.com/brandojs@0.1.3/bRando-0.1.3.min.js"></script>
```

#### Download

Otherwise, download the `bRando-0.1.3.min.js` file or clone this repository, and include the following code right before the closing `</body>` tag.

```html
<script type="text/javascript" src="bRando-0.1.3.min.js"></script>
```

### Create a background randomizer

Then create an array of backgrounds to be used (they can include images, colors, and/or gradients):

```javascript
// Our array of backgrounds to use
var backgrounds = [
	"url('https://images.unsplash.com/photo-1502691876148-a84978e59af8')", // we can use images
	"url('https://images.unsplash.com/photo-1463438690606-f6778b8c1d10')",
	"url('https://images.unsplash.com/photo-1538291323976-37dcaafccb12')",
	"#000", // we can use colors
	"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", // we can use gradients
];
```

See [documentation section](#Documentation) for more information on background options.

Next, we create a background randomizer and save it to a variable called `backgroundRandomizer`:

```javascript
// Create a new background randomizer
var backgroundRandomizer = bRando.new(
	"div", // Selector string of which elements to change backgrounds on
	backgrounds, // Array of backgrounds
	10000, // Time in milliseconds between background changes
	2500, // Duration in milliseconds of transitions
	true // Whether to cycle through the backgrounds randomly or not
);
```

The new randomizer will automatically begin playing.

### Change the background(s)

We can manually move to the next background:

```javascript
backgroundRandomizer.next(); // Move to the next background
```

### Remove the background randomizer

When we are done with it, we can remove the randomizer from the `<div>` elements:

```javascript
backgroundRandomizer.remove(); // Remove background randomizer
```

This will revert the background settings on all selected elements to the state they were before we changed them.

## Documentation

### Create a background randomizer

Background randomizers are created using the bRando.new() method and are attached to select HTML elements by passing a [DOM selector string](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors#Selectors) argument.

```javascript
// Create a new background randomizer
bRando.new (
    String <selector>, // String selector .class, #id, or element e.g. "div"
    String[] <background_array>, // Array of background properties to use
    Integer <interval_ms>, // Time between background changes e.g. 10000
    Integer <transition_ms>, // Duration of transition animation e.g. 2500
    Boolean <random_order> // Whether to go through backgrounds at random or not e.g. false
);
```

`bRando.new()` returns the created background randomizer object and automatically plays it. If no elements were found using the selector string, the function returns error code `1` instead.

If the selector string was already used to create a randomizer, the old randomizer will be removed before creating a new one.

The `background_array` may contain any combination of CSS background properties including images, colors, and gradients. See [https://developer.mozilla.org/en-US/docs/Web/CSS/background](https://developer.mozilla.org/en-US/docs/Web/CSS/background). For example:

```javascript
// mixed background types
var backgrounds = [
	"url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e')", // image url
	"fixed url('https://images.unsplash.com/photo-1491147334573-44cbb4602074') center no-repeat", // image url with other background properties
	"#ff00ff", // magenta background color in hex code
	"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", // horizontal blue linear gradient
	"rgb(219, 125, 0)", // orange background color in rgb form
	"rgba(131, 92, 59, 1.0)", // brown background color in rgba form
	"#ff0000f0", // red background color in hex code with alpha code
];
```

**⚠️ Warning:**

> Creating too many randomizers will consume large amounts of CPU power—particularly while backgrounds are transitioning.

**⚠️ Warning:**

> If multiple randomizers are attached to an html element the background change intervals will be unpredictable.
>
> For example:
>
> ```javascript
> // Selects all <div> elements with the class of "stuff"
> var r1 = bRando.new("div.stuff");
>
> // Selects all <div> elements including the ones
> // already selected for the above background randomizer
> var r2 = bRando.new("div");
> ```
>
> If for some reason this is done, make sure to remove the randomizers in reverse order:
>
> ```javascript
> r2.remove(); // Remove the second randomizer first
> r1.remove(); // Then remove the first randomizer
> ```
>
> This way the elements will be properly reverted to the state they were in before the randomizers modified them.

### Start the demo background randomizer

If no arguments are passed to `bRando.new()` it will create and return a demo randomizer acting on the `<html>` element:

```javascript
bRando.new(); // Use the demo background randomizer which acts on <html>
```

Check it out on the [demo](https://isaacyakl.github.io/brandojs/) page.

### Manually move to the next background

```javascript
r1.next(); // Manually move the background randomizer, r1, to the next background
```

If the randomizer is currently performing a transition animation, the function will return error code `1` indicating it is already going to the next background. If the randomly chosen background is an image which has not yet preloaded, the function with return error code `2`. Otherwise, the function will return `0` indicative of a successful background change.

### Manually move all background randomizers to their next background

```javascript
bRando.nextAll(); // Manually move all background randomizers to their next background
```

Returns `0` if it successfully moved all randomizers to their next background. Otherwise, the function returns the number of randomizers that failed to change.

### Pause a background randomizer

```javascript
r1.pause(); // Pause the background randomizer, r1
```

Returns `0` if the randomizer is successfully paused. Otherwise, the functions returns `1` to indicate that the randomizer is already paused.

### Pause all background randomizers

```javascript
bRando.pauseAll(); // Pause all background randomizers
```

Returns `0` if all the randomizers successfully paused. Otherwise, the function returns the number of randomizers which are already paused.

### Play background randomizer

```javascript
r1.play(); // Play the background randomizer, r1, if it is currently paused
```

Returns `0` if the randomizer was successfully played. Otherwise, the function returns `1` if the randomizer is already playing.

### Play all background randomizers

```javascript
bRando.playAll(); // Play all background randomizers that are paused
```

Returns `0` if all the randomizers successfully played. Otherwise, the function returns the number of randomizers which are already playing.

### Remove a background randomizer

```javascript
r1.remove(); // Remove the background randomizer, r1
```

This removes the randomizer and reverts the background settings on the selected element(s). Returns `0` for successful removal.

### Remove all background randomizers

```javascript
bRando.removeAll(); // Remove all background randomizers
```

This removes all randomizers and reverts the background settings on the selected element(s). Returns `0` for successful removal.
