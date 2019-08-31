// jBir by yak
// www.isaacyakl.com @isaacyakl

// jBir object
// useful in initializing and controlling all image rotators
const jBir = {
  version: "0.0.2", // Version number string
  jBirImgRotators: [], // Image rotators array
  jBirPreloadedImgs: [], // Images that have already been preload into the document

  // Function for initializing a new image rotator for a specific set of selected elements
  new: function(
    selector_string, // element selector string
    image_url_arr, // array of image urls
    interval_ms, // ms interval between image rotations
    transition_ms, // ms transition length of image rotation
    transition_type, // css transition type for image rotation
    random_order, // randomize images: true or false
    background_attachment // what the css background-attachment property should be <scroll|fixed|local|initial|inherit>
  ) {
    // create new image rotator for element(s)
    let newjBirImgRotator = new jBirImgRotator();
    if (selector_string != undefined)
      newjBirImgRotator.selector_string = selector_string; // if a selector string was provided store it
    // generate element(s) list
    newjBirImgRotator.elements = document.querySelectorAll(
      newjBirImgRotator.selector_string
    );
    if (image_url_arr != undefined)
      newjBirImgRotator.image_url_arr = image_url_arr; // if an image array was was provided store it
    if (interval_ms != undefined) newjBirImgRotator.interval_ms = interval_ms; // if an interval was specified store it
    if (transition_ms != undefined)
      newjBirImgRotator.transition_ms = transition_ms; // if a transition time was given store it
    if (transition_type != undefined)
      newjBirImgRotator.transition_type = transition_type; // if a transition type was chosen store it
    if (random_order != undefined)
      newjBirImgRotator.random_order = random_order; // if random order was set store it
    if (background_attachment != undefined)
      newjBirImgRotator.background_attachment = background_attachment; // if background attachment property was given store it

    // Preload images
    for (let i = 0; i < newjBirImgRotator.image_url_arr.length; i++) {
      // If the image has not been preload (not found in preloaded images array)
      if (
        !this.jBirPreloadedImgs.includes(newjBirImgRotator.image_url_arr[i])
      ) {
        newImg = document.createElement("img"); // Create new img element
        newImg.style.display = "none"; // set it not to display
        newImg.style.zIndex = "-9999"; // move it behind everything
        newImg.height = "0"; // give it no height
        newImg.width = "0"; // give it no width
        newImg.src = newjBirImgRotator.image_url_arr[i]; // set src
        document.body.appendChild(newImg); // add to body
        this.jBirPreloadedImgs.push(newjBirImgRotator.image_url_arr[i]); // log image url as preloaded
      }
    }

    // Check if selector already has an image rotator handling it (process may be optimized in future using array filter function?)
    // Iterate through image rotators array
    for (let i = 0; i < this.jBirImgRotators.length; i++) {
      // If existing rotator has same selector string as new rotator
      if (
        this.jBirImgRotators[i].selector_string ==
        newjBirImgRotator.selector_string
      ) {
        this.pause(this.jBirImgRotators[i]); // pause rotator before deleting it to avoid duplicate img rotators
        this.jBirImgRotators.splice(i, 1); // delete existing image rotator
      }
    }

    // Set transition properties on the element(s)
    newjBirImgRotator.elements.forEach(element => {
      element.style.transition =
        "background " +
        newjBirImgRotator.transition_ms / 1000 +
        "s " +
        newjBirImgRotator.transition_type;
    });

    this.jBirImgRotators.push(newjBirImgRotator); // add new image rotator object to array of rotators
    this.next(newjBirImgRotator); // move to first image
    this.play(newjBirImgRotator); // start image rotator

    return newjBirImgRotator; // return new image rotator object
  },
  pause: function(jBirImgRotator) {
    clearInterval(jBirImgRotator.rotator_id); // clear setInterval function using stored id
    jBirImgRotator.rotator_id = null; // set id to null
    return 0; // success
  },
  pauseAll: function() {
    // pause each image rotator
    jBir.jBirImgRotators.forEach(jBirImgRotator => {
      jBir.pause(jBirImgRotator); // pause image rotator
    });
    return 0; // success
  },
  play: function(jBirImgRotator) {
    // to prevent spamming rotators
    if (jBirImgRotator.rotator_id != null) jBir.pause(jBirImgRotator); // if a rotator id is set, pause that one first

    // set an interval to rotate images and store the function id
    jBirImgRotator.rotator_id = setInterval(function() {
      jBir.next(jBirImgRotator);
    }, jBirImgRotator.interval_ms);
    return 0; // success
  },
  playAll: function() {
    // play each image rotator
    jBir.jBirImgRotators.forEach(jBirImgRotator => {
      jBir.play(jBirImgRotator); // play image rotator
    });
    return 0; // success
  },
  next: function(jBirImgRotator) {
    let indexOfNextImg = jBirImgRotator.last_image; // defaults to last image url
    // if randomize is on
    if (jBirImgRotator.random_order) {
      // Pick a random next image
      do {
        // Choose a random index for next img between 0 and the image url array length minus 1
        indexOfNextImg = Math.floor(
          Math.random() * (jBirImgRotator.image_url_arr.length - 1 - 0 + 1) + 0
        ); // Math.floor(Math.random() * (max - min + 1) + min);
      } while ( // while there are more than 1 image urls to choose from and the already set image is not chosen again
        indexOfNextImg == jBirImgRotator.last_image &&
        jBirImgRotator.image_url_arr.length != 1
      );
    }
    // else randomize is off
    else {
      // Move to next image url index or start over the image url index
      indexOfNextImg =
        jBirImgRotator.last_image + 1 > jBirImgRotator.image_url_arr.length - 1 // if we have reached the last image url
          ? (indexOfNextImg = 0) // set index to first image url
          : (indexOfNextImg = ++jBirImgRotator.last_image); // otherwise set index to the next img (or if we have never set one yet set to the first [0] from [-1] the default last_img value)
    }

    // set new background image(s)
    jBirImgRotator.elements.forEach(element => {
      element.style.backgroundSize = "cover";
      element.style.background =
        "url('" +
        jBirImgRotator.image_url_arr[indexOfNextImg] +
        "') no-repeat " +
        jBirImgRotator.background_attachment +
        " center center";
    });

    jBirImgRotator.last_image = indexOfNextImg; // store last image index
    return 0; // success
  }
};

// Image rotator
class jBirImgRotator {
  selector_string = "html"; // default selector string is "html"
  elements = []; // stores element(s) to add an image rotator to
  // array of image urls to rotate
  image_url_arr = [
    // default images
    "https://images.unsplash.com/photo-1502691876148-a84978e59af8",
    "https://images.unsplash.com/photo-1463438690606-f6778b8c1d10",
    "https://images.unsplash.com/photo-1538291323976-37dcaafccb12",
    "https://images.unsplash.com/photo-1524293568345-75d62c3664f7",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    "https://images.unsplash.com/photo-1529912626516-e58b23f44f1d",
    "https://images.unsplash.com/photo-1545231097-c046d9dcc2f6",
    "https://images.unsplash.com/photo-1558470598-a5dda9640f68",
    "https://images.unsplash.com/photo-1545231097-cbd796f1d95f",
    "https://images.unsplash.com/photo-1518516278006-4aca92806257",
    "https://images.unsplash.com/photo-1533669955142-6a73332af4db"
  ];
  interval_ms = 10000; // default interval between image rotations
  transition_ms = 3000; // default transition time
  transition_type = "ease-in-out"; // default transition type
  random_order = true; // default to randomize image order
  background_attachment = "fixed"; // default is "fixed"
  last_image = -1; // variable for index of last image; -1 indicates no image was used yet
  rotator_id = null; // used to store setInterval function rotator id

  constructor() {}
}
