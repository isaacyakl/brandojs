# bRando.js

An HTML element background randomizer. Written with vanilla JavaScript by [yak](https://www.isaacyakl.com).

Demo: [https://isaacyakl.github.io/bRando/](https://isaacyakl.github.io/bRando/)

Distributed under the [MIT License](https://isaacyakl.github.io/bRando/LICENSE).

Show support by following me on [Twitter](https://www.twitter.com/isaacyakl) and [GitHub](https://github.com/isaacyakl).

## Usage

### Include bRando

After downloading the minified bRando.js file or cloning this repository, include bRando by placing the `<script>` tag just after the closing `</body>` of your html page.

```html
  ...
  </body>
  <script type="text/javascript" src="bRando-0.0.7.min.js"></script>
</html>
```

### Create a background randomizer

Then create an array of images to be used as backgrounds (examples taken from [Unsplash](https://www.unsplash.com)):

```javascript
// Our array of image URLs to use
var images = [
  "https://images.unsplash.com/photo-1502691876148-a84978e59af8",
  "https://images.unsplash.com/photo-1463438690606-f6778b8c1d10",
  "https://images.unsplash.com/photo-1538291323976-37dcaafccb12"
];
```

Next, we create a background randomizer and save it to a variable called `backgroundRandomizer`:

```javascript
// Create a new background randomizer
var backgroundRandomizer = bRando.new(
  "div", // Selector string of which elements to change backgrounds on
  images, // Array of image URLS
  10000, // Time in milliseconds between background changes
  3000, // Duration in milliseconds that the transition animation should take
  "ease-in-out", // The transition animation type
  true, // Whether to cycle through the backgrounds randomly or not
  "fixed" // Background attachment type
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

```javascript
// Create a new background randomizer
bRando.new (
    String <selector>, // String selector .class, #id, or element e.g. "div"
    String[] <image_url_array>, // Array of image URLs to randomize
    Integer <interval_ms>, // Time between background rotations e.g. 10000
    Integer <transition_ms>, // Duration of transition animation e.g. 3000
    String <transition_type>, // Type of transition timing function e.g. "ease-in-out". See https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
    Boolean <random_order>, // Whether to go through backgrounds at random or not e.g. false
    String <background_attachment> // How to attach the background e.g. "fixed". See https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
);
```

`bRando.new()` returns the created backgound randomizer object and automatically plays it. If no elements were found using the selector string, the function returns error code `1` instead.

If the selector string was already used to create a randomizer, the old randomizer will be deleted before creating a new one.

**⚠️ Warning:**

> Creating too many randomizers will consume large amounts of CPU power—particularly while backgrounds are transitioning.

**⚠️ Warning:**

> If multiple randomizers are attached to an html element the rotation intervals will be unpredictable.
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
> This way the elements will be properly reverted to the state they were in before the randomizers modified them.

### Start the demo background randomizer

If no arguments are passed to `bRando.new()` it will create and return a demo randomizer acting on the `<html>` element:

```javascript
bRando.new(); // Use the demo background randomizer which acts on <html>
```

Check it out on the [demo](https://isaacyakl.github.io/bRando/) page.

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

## To-Do
- Add ability to randomize either background-image or background-color
- Release on NPM
- Preload images smallest to largest
