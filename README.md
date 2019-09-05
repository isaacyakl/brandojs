# jBir
A vanilla js Background image rotator library.

Demo: [https://isaacyakl.github.io/jBir/](https://isaacyakl.github.io/jBir/)

## Usage
### Include the library:
To use this library place the following `<script>` tag just after the closing `</body>` of your html page:
```html
<script type="text/javascript" src="jBir.js"></script>
```
For example:
```html
  ...
  </body>
  <script type="text/javascript" src="jBir.js"></script>
</html>
```

### `jBir.new()` - Create a new rotator:
```javascript
jBir.new (
    String <selector>, // String selector e.g. "div"
    String[] <image_url_array>, // Array of image URLs to rotate
    Integer <interval_ms>, // Time between image rotation e.g. 10000
    Integer <transition_ms>, // Duration of transition animation e.g. 3000
    String <transition_type>, // Type of transition e.g. "ease-in-out". See https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
    Boolean <random_order>, // Whether to go through images at random or not e.g. false
    String <background_attachment> // How to attach the background image e.g. "fixed". See https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
);
```
`jBir.new()` returns the created `jBirImageRotator` object which you will need to pass to the below control functions. If no elements were found using the selector string, the function returns error code `1`.

If no arguments are passed to `jBir.new()` it will create a default demo image rotator and attach it to the `<html>` element.

**Note:** If multiple image rotators are attached to the same html elements the rotation intervals will be unpredictable and removal of the rotators may have unexpected results. For example:

```javascript
var r1 = jBir.new("div.stuff"); // Selects all <div> elements with the class of "stuff"
var r2 = jBir.new("div"); // Selects all <div> elements including the ones already selected for the above image rotator
```
If this is done, make sure to remove the rotators in reverse order:
```javascript
jBir.remove(r2); // Remove the second rotator first
jBir.remove(r1); // Then remove the first rotator
```


### `jBir.next()` - Manually move image rotator to next image:
```javascript
jBir.next(Object <jBirImageRotator>);
```
If the image is currently performing a transition animation the function will return error code `1` indicating it is already going to next image. If the image the function chooses to rotate to is not yet preloaded, the function with return error code `2`. Otherwise, the function with return `0` indicative of a successful image rotation.

### `jBir.nextAll()` - Manually move all image rotators to next image:
```javascript
jBir.nextAll();
```
Returns `0` if it successfully moved all rotators to next image. Otherwise, the function returns the number of image rotators that failed to rotate to next image.

### `jBir.pause()` - Pause an image rotator:
```javascript
jBir.pause(Object <jBirImageRotator>);
```
Returns `0` if the image rotator is successfully paused. Otherwise, the functions returns `1` to indicate the image rotator is already paused.

### `jBir.pauseAll()` - Pause all image rotators:
```javascript
jBir.pauseAll();
```
Returns `0` if the image rotators all successfully paused. Otherwise, the functions returns the number of image rotators which are already paused.

### `jBir.play()` - Play image rotator if it is paused:
```javascript
jBir.play(Object <jBirImageRotator>);
```
Returns `0` is the image rotator was successfully started. Otherwise, the function returns `1` if the image rotator is already playing.

### `jBir.playAll()` - Play all image rotators:
```javascript
jBir.playAll();
```
Returns `0` if the image rotators all successfully paused. Otherwise, the functions returns the number of image rotators which are already paused.

### `jBir.remove()` - Remove an image rotator:
```javascript
jBir.remove(Object <jBirImageRotator>);
```
This function resets all selected elements back to the state they were before an image rotator was attached to them. Returns `0` for successful removal.

### `jBir.removeAll()` - Remove all image rotators:
```javascript
jBir.removeAll();
```
This function resets all image rotators' selected elements back to the state they were before an image rotator was attached to them. Returns `0` for successful removal.

## Examples

### Example 1
Activate demo by calling `jBir.new()` without passing any arguments:
```javascript
jBir.new(); // Uses default demo image rotator and attaches it to <html>
```
### Example 2
First we create an array of images (examples taken from [Unsplash](https://www.unsplash.com) ):
```javascript
// Our array of image URLs to use
var images = [
    "https://images.unsplash.com/photo-1502691876148-a84978e59af8",
    "https://images.unsplash.com/photo-1463438690606-f6778b8c1d10",
    "https://images.unsplash.com/photo-1538291323976-37dcaafccb12",
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
Then, we demonstrate how to move to the next image before removing the rotator from the `<div>` elements:
```javascript
// Move to next image
jBir.next(imageRotator);

// Remove image rotator
jBir.remove(imageRotator);
```

Complete example code:
```javascript
// Our array of image URLs to use
var images = [
    "https://images.unsplash.com/photo-1502691876148-a84978e59af8",
    "https://images.unsplash.com/photo-1463438690606-f6778b8c1d10",
    "https://images.unsplash.com/photo-1538291323976-37dcaafccb12",
];

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

// Move to next image
jBir.next(imageRotator);

// Remove image rotator
jBir.remove(imageRotator);
```



## To-Do
* Generate minified js file
* Improve demo page
* Preload images smallest to largest
* Add ability to rotate background-color