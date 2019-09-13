# jBir

A vanilla javascript Background image rotator library.

Demo: [https://isaacyakl.github.io/jBir/](https://isaacyakl.github.io/jBir/)

## Setup & Creation

### Include jBir

After downloading the minified jBir file or cloning this repository, include jBir by placing the `<script>` tag just after the closing `</body>` of your html page.

For example:

```html
  ...
  </body>
  <script type="text/javascript" src="jBir-0.0.7.min.js"></script>
</html>
```

### Create an image rotator

```javascript
// Create a new image rotator
jBir.new (
    String <selector>, // String selector e.g. "div"
    String[] <image_url_array>, // Array of image URLs to rotate
    Integer <interval_ms>, // Time between image rotation e.g. 10000
    Integer <transition_ms>, // Duration of transition animation e.g. 3000
    String <transition_type>, // Type of transition timing function e.g. "ease-in-out". See https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
    Boolean <random_order>, // Whether to go through images at random e.g. false
    String <background_attachment> // How to attach the background image e.g. "fixed". See https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
);
```

`jBir.new()` returns the created `jBirImageRotator` object and automatically starts it. If no elements were found using the selector string, the function returns error code `1`.

If no arguments are passed to `jBir.new()` it will create a default demo image rotator and attach it to the `<html>` element.

**Warning:**

> If multiple image rotators are attached to the same html elements the rotation intervals will be unpredictable and removal of the rotators may have unexpected results.
>
> For example:
>
> ```javascript
> // Selects all <div> elements with the class of "stuff"
> var r1 = jBir.new("div.stuff");
>
> // Selects all <div> elements including the ones
> // already selected for the above image rotator
> var r2 = jBir.new("div");
> ```
>
> If this is done, make sure to remove the rotators in reverse order:
>
> ```javascript
> r2.remove(); // Remove the second rotator first
> r1.remove(); // Then remove the first rotator
> ```

## Control

### Manually move to next image

```javascript
r1.next(); // Manually move the image rotator r1 to the next image
```

If the rotator is currently performing a transition animation, the function will return error code `1` indicating it is already going to next image. If the image the function chooses to rotate to is not yet preloaded, the function with return error code `2`. Otherwise, the function will return `0` indicative of a successful image rotation.

### Manually move all image rotators to next image

```javascript
jBir.nextAll(); // Manually move all image rotators to the next image
```

Returns `0` if it successfully moved all rotators to their next image. Otherwise, the function returns the number of image rotators that failed to rotate to their next image.

### Pause image rotator

```javascript
r1.pause(); // Pause the image rotator
```

Returns `0` if the rotator is successfully paused. Otherwise, the functions returns `1` to indicate that the rotator is already paused.

### Pause all image rotators

```javascript
jBir.pauseAll(); // Pause all image rotators
```

Returns `0` if all the rotators successfully paused. Otherwise, the functions returns the number of rotators which are already paused.

### Play image rotator

```javascript
r1.play(); // Play the image rotator if it is currently paused
```

Returns `0` if the rotator was successfully played. Otherwise, the function returns `1` if the rotator is already playing.

### Play all image rotators

```javascript
jBir.playAll(); // Play all image rotators that are paused
```

Returns `0` if all the rotators successfully played. Otherwise, the function returns the number of rotators which are already playing.

### Remove an image rotator

```javascript
r1.remove(); // Remove the image rotator
```

This removes the rotator and resets the background settings on the selected element(s). Returns `0` for successful removal.

### Remove all image rotators

```javascript
jBir.removeAll(); // Remove all image rotators
```

This removes all rotators and resets the background settings on the selected element(s). Returns `0` for successful removal.

## Examples

### Example 1

Activate demo by calling `jBir.new()` without passing any arguments:

```javascript
jBir.new(); // Uses default demo image rotator and attaches it to <html>
```

### Example 2

First we create an array of images (examples taken from [Unsplash](https://www.unsplash.com)):

```javascript
// Our array of image URLs to use
var images = [
  "https://images.unsplash.com/photo-1502691876148-a84978e59af8",
  "https://images.unsplash.com/photo-1463438690606-f6778b8c1d10",
  "https://images.unsplash.com/photo-1538291323976-37dcaafccb12"
];
```

Next we create an image rotator which connects to every `<div>` on the page and save it to a variable called `imageRotator`:

```javascript
// Create a new image rotator
var imageRotator = jBir.new(
  "div", // Selector string of which elements to add to
  images, // Array of image URLS
  10000, // Time in milliseconds between image changes
  3000, // Duration in milliseconds that the image transition animation should take
  "ease-in-out", // The transition animation type
  true, // Whether to cycle through the images randomly or not
  "fixed" // Background image attachment type
);
```

The new rotator will automatically play, but we can also manually move to the next image:

```javascript
imageRotator.next(); // Move to next image
```

Lastly, when we are done, we can remove the rotator from the `<div>` elements:

```javascript
imageRotator.remove(); // Remove image rotator
```

## To-Do

- Change license
- Improve demo page
- Preload images smallest to largest
- Add ability to rotate background-color
