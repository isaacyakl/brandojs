// jBir by yak
// www.isaacyakl.com @isaacyakl

// jBir object
// Used for creating and controlling all image rotators
const jBir = {
  version: "0.0.7", // Version number string
  jBirImgRotators: [], // Image rotators array
  jBirPreloadedImgs: [], // Images that have already been preload into the document

  // Function to check if an image is preloaded already
  // Returns true if preloaded or false if not
  isPreloadedImg: (
    imageURL // image URL string
  ) => {
    // Iterate through preloaded images array
    for (let i = 0; i < jBir.jBirPreloadedImgs.length; i++) {
      // If current preloaded image url matches the one we are checking for
      if (jBir.jBirPreloadedImgs[i].src == imageURL) {
        return true; // Return true image is preloaded
      }
    }
    return false; // Return false image is not yet preloaded
  },
  // Function for initializing a new image rotator for a specific set of selected elements
  // Returns new image rotator object or error code if selector returns no elements
  // Return codes: 1 - no elements found with selector string
  new: (
    selector_string, // element selector string
    image_url_arr, // array of image urls
    interval_ms, // ms interval between image rotations
    transition_ms, // ms transition length of image rotation
    transition_type, // css transition type for image rotation
    random_order, // randomize images: true or false
    background_attachment // what the css background-attachment property should be <scroll|fixed|local|initial|inherit>
  ) => {
    // create new image rotator for element(s)
    let newjBirImgRotator = new jBirImgRotator();
    if (selector_string != undefined) newjBirImgRotator.selector_string = selector_string; // if a selector string was provided store it
    // generate element(s) list
    newjBirImgRotator.elements = document.querySelectorAll(newjBirImgRotator.selector_string);
    // if elements list is empty
    if (newjBirImgRotator.elements.length == 0) return 1; // selector string returned no elements; abort image rotator creation
    if (image_url_arr != undefined) newjBirImgRotator.image_url_arr = image_url_arr; // if an image array was was provided store it
    if (interval_ms != undefined) newjBirImgRotator.interval_ms = interval_ms; // if an interval was specified store it
    if (transition_ms != undefined) newjBirImgRotator.transition_ms = transition_ms; // if a transition time was given store it
    if (transition_type != undefined) newjBirImgRotator.transition_type = transition_type; // if a transition type was chosen store it
    if (random_order != undefined) newjBirImgRotator.random_order = random_order; // if random order was set store it
    if (background_attachment != undefined)
      newjBirImgRotator.background_attachment = background_attachment; // if background attachment property was given store it

    // Store original transition property
    newjBirImgRotator.og_transition_property = newjBirImgRotator.elements[0].style.transition;

    // Store original background properties
    newjBirImgRotator.og_background_size_property =
      newjBirImgRotator.elements[0].style.backgroundSize;
    newjBirImgRotator.og_background_property = newjBirImgRotator.elements[0].style.background;

    // Preload images
    // For each image url in the array
    newjBirImgRotator.image_url_arr.forEach(image_url => {
      // If the image has not yet been preloaded in the preload array
      if (!jBir.isPreloadedImg(image_url)) {
        let newImg = document.createElement("img"); // Create new img element
        newImg.style.display = "none"; // Just incase, set it not to display even though it is never added to document

        // When an image cannot be loaded
        newImg.onerror = () => {
          console.error("Error preloading " + newImg.src + "."); // Error loading image
        };

        // When the image finishes loading
        newImg.onload = () => {
          jBir.jBirPreloadedImgs.push(newImg); // Save preloaded image object to preload array

          // If the image rotator still does not have an image set
          if (newjBirImgRotator.last_image == -1) newjBirImgRotator.next(); // try to change it to the preloaded image
        };
        newImg.src = image_url; // Set src
      }
    });

    // Check if selector already has an image rotator handling it
    // Iterate through image rotators array
    jBir.jBirImgRotators.forEach(jBirImgRotator => {
      // If existing rotator has same selector string as new rotator
      if (jBirImgRotator.selector_string === newjBirImgRotator.selector_string) {
        // Store original transition property
        newjBirImgRotator.og_transition_property = jBirImgRotator.og_transition_property;

        // Store original background properties
        newjBirImgRotator.og_background_size_property = jBirImgRotator.og_background_size_property;
        newjBirImgRotator.og_background_property = jBirImgRotator.og_background_property;

        jBirImgRotator.remove(); // remove rotator to avoid duplicate img rotators
        return; // stop forEach since existing rotator was already handled
      }
    });

    jBir.jBirImgRotators.push(newjBirImgRotator); // add new image rotator object to array of rotators

    // Set transition properties on the element(s)
    newjBirImgRotator.elements.forEach(element => {
      element.style.transition =
        "background " +
        newjBirImgRotator.transition_ms / 1000 +
        "s " +
        newjBirImgRotator.transition_type;
    });

    newjBirImgRotator.next(); // move to first image
    newjBirImgRotator.play(); // start image rotator

    return newjBirImgRotator; // return new image rotator object
  },
  // Function for changing all rotators to next image
  // Returns 0 for success or number of image rotators which failed to rotate to next image
  nextAll: () => {
    var numErrors = 0; // variable to hold number of errors returned
    // move to next image in all image rotators
    jBir.jBirImgRotators.forEach(jBirImgRotator => {
      // move to next image
      // if moving to the next image returned an error code
      if (jBirImgRotator.next() != 0) {
        numErrors++; // increase number of rotators with errors
      }
    });

    return numErrors; // return number of errors
  },
  // Function to pause all rotators
  // Returns 0 for success or number of image rotators which are already paused
  pauseAll: () => {
    var numErrors = 0; // variable to hold number of errors returned
    // pause all image rotators
    jBir.jBirImgRotators.forEach(jBirImgRotator => {
      // pause image rotator
      // if pausing the image rotator returned an error code
      if (jBirImgRotator.pause() != 0) {
        numErrors++; // increase number of rotators with errors
      }
    });
    return numErrors; // return number of errors
  },
  // Function to start all rotators
  // Returns 0 for success or number of image rotators which are already playing
  playAll: () => {
    var numErrors = 0; // variable to hold number of errors returned
    // play each image rotator
    jBir.jBirImgRotators.forEach(jBirImgRotator => {
      // play image rotator
      // if playing the image rotator returned an error code
      if (jBirImgRotator.play() != 0) {
        numErrors++; // increase number of rotators with errors
      }
    });
    return numErrors; // return number of errors
  },
  // Function for removing all rotators
  // Returns 0 for success
  removeAll: () => {
    let runtimejBirImgRotators = Array.from(jBir.jBirImgRotators); // Make a shallow copy of the image rotators array to iterate through because we will be modifying the original and we cannot .forEach() through it successfully if the number of items in it changes during runtime
    runtimejBirImgRotators.forEach(jBirImgRotator => {
      jBirImgRotator.remove(); // remove image rotator
    });
    return 0; // success
  }
};

// Image rotator
class jBirImgRotator {
  // Constructor to set default properties and create state management variables
  constructor() {
    // Property variables
    this.selector_string = "html"; // default selector string is "html"
    this.elements = []; // initially empty; stores element(s) to add an image rotator to
    // array of image urls to rotate
    this.image_url_arr = [
      // default images
      "https://images.unsplash.com/photo-1502691876148-a84978e59af8",
      "https://images.unsplash.com/photo-1463438690606-f6778b8c1d10",
      "https://images.unsplash.com/photo-1538291323976-37dcaafccb12",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      "https://images.unsplash.com/photo-1529912626516-e58b23f44f1d",
      "https://images.unsplash.com/photo-1545231097-c046d9dcc2f6",
      "https://images.unsplash.com/photo-1558470598-a5dda9640f68",
      "https://images.unsplash.com/photo-1545231097-cbd796f1d95f",
      "https://images.unsplash.com/photo-1518516278006-4aca92806257"
    ];
    this.interval_ms = 10000; // default interval between image rotations
    this.transition_ms = 3000; // default transition time
    this.transition_type = "ease-in-out"; // default transition type
    this.random_order = true; // default to randomize image order
    this.background_attachment = "fixed"; // default is "fixed"
    this.rotator_id = null; // initially null until set; used to store setInterval function rotator id

    // State Variables
    this.last_image = -1; // variable for index of last image; -1 indicates no image was used yet
    this.transitioning = false; // variable to keep track of whether the transition animation is taking place
    this.og_transition_property = ""; // variable to hold the original transition property before an image rotator is added
    this.og_background_size_property = ""; // variable to hold the original background size property before an image rotator is added
    this.og_background_property = ""; // variable to hold the original background property before an image rotator is added
  }
  // Function for changing to next image
  // Return codes: 0 - success; 1 - failure already going to next; 2 - failure waiting for image to preload
  next() {
    // if already transitioning to next image per previous call
    if (this.transitioning) return 1; // return error code 1 without changing image to prevent spamming which glitches the transition animation
    this.transitioning = true; // set transitioning variable to true because we are in process of changing images
    let indexOfNextImg = this.last_image; // defaults to last image url

    // If there is one preload image available and it is one of the images for this rotator
    if (
      jBir.jBirPreloadedImgs.length == 1 && // The preload array length is 1
      this.image_url_arr.includes(jBir.jBirPreloadedImgs[0].src) // The preloaded image is one of this rotator's
    ) {
      // Set the index of the next image to be the one preloaded image
      indexOfNextImg = this.image_url_arr.indexOf(jBir.jBirPreloadedImgs[0].src);
    } else {
      // Otherwise we have more preload options available
      // if randomize is on
      if (this.random_order) {
        // Pick a random next image
        do {
          // Choose a random index for next img between 0 and the image url array length minus 1
          indexOfNextImg = Math.floor(Math.random() * (this.image_url_arr.length - 1 - 0 + 1) + 0); // Math.floor(Math.random() * (max - min + 1) + min);
        } while (indexOfNextImg == this.last_image && this.image_url_arr.length != 1); // while there are more than 1 image urls to choose from and the already set image is not chosen again
      }
      // else randomize is off
      else {
        // Move to next image url index or start over the image url index
        indexOfNextImg =
          this.last_image + 1 > this.image_url_arr.length - 1 // if we have reached the last image url
            ? (indexOfNextImg = 0) // set index to first image url
            : (indexOfNextImg = ++this.last_image); // otherwise set index to the next img (or if we have never set one yet set to the first [0] from [-1] the default last_img value)
      }

      // If the chosen image is not yet preloaded
      if (!jBir.isPreloadedImg(this.image_url_arr[indexOfNextImg])) {
        this.transitioning = false; // set transitioning variable to false
        return 2; // return error code 2 without changing image because it is not yet preloaded
      }
    }

    // If we got this far

    // Set new background image(s)
    this.elements.forEach(element => {
      element.style.backgroundSize = "cover";
      element.style.background =
        "url('" +
        this.image_url_arr[indexOfNextImg] +
        "') no-repeat " +
        this.background_attachment +
        " center center";
    });

    this.last_image = indexOfNextImg; // Store last image index

    // Add event listener to first element in list to see when transition animation ends
    this.elements[0].addEventListener("transitionend", () => {
      this.transitioning = false; // Set transitioning variable back to false
    });

    // If the image rotator is playing restart it
    // If rotator id is found
    if (this.rotator_id != null) {
      this.pause(); // pause it to clear interval
      this.play(); // play it to create new interval
    }
    return 0; // success
  }
  // Function to pause rotator
  // Returns 0 if pausing succeeded or 1 if the image rotator is already paused
  pause() {
    // If there is a rotator_id to clear
    if (this.rotator_id != null) {
      clearInterval(this.rotator_id); // clear setInterval function using stored id
      this.rotator_id = null; // set id to null
      return 0; // success
    }
    return 1; // image rotator not playing
  }
  // Function to start a rotator
  // Returns 0 for success and 1 for already playing
  play() {
    // To prevent spamming rotators
    // If rotator id already exists then image rotator is already playing
    if (this.rotator_id != null) return 1; // Return with error code 1

    // set an interval to rotate images and store the function id
    this.rotator_id = setInterval(() => this.next(), this.interval_ms);
    return 0; // success
  }
  // Function for removing a rotator
  // Returns 0 for success
  remove() {
    this.pause(); // Pause rotator
    this.elements.forEach(element => {
      element.style.transition = this.og_transition_property; // Revert transition property
      element.style.backgroundSize = this.og_background_size_property; // Revert background size property
      element.style.background = this.og_background_property; // Revert background property
    });
    jBir.jBirImgRotators.splice(jBir.jBirImgRotators.indexOf(this), 1); // Destroy image rotator
    return 0; // success
  }
}
