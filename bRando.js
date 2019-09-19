// bRando by yak
// www.isaacyakl.com @isaacyakl

// bRando object
// Used for creating and controlling all background randomizers
const bRando = {
  version: "0.0.7", // Version number string
  bRandoBackgroundRandomizers: [], // background randomizers array
  bRandoPreloadedImgs: [], // Images that have already been preload into the document

  // Function to check if an image is preloaded already
  // Returns true if preloaded or false if not
  isPreloadedImg: (
    imageURL // image URL string
  ) => {
    // Iterate through preloaded images array
    for (let i = 0; i < bRando.bRandoPreloadedImgs.length; i++) {
      // If current preloaded image url matches the one we are checking for
      if (bRando.bRandoPreloadedImgs[i].src == imageURL) {
        return true; // Return true image is preloaded
      }
    }
    return false; // Return false image is not yet preloaded
  },
  // Function for initializing a new background randomizer for a specific set of selected elements
  // Returns new background randomizer object or error code if selector returns no elements
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
    // create new background randomizer for element(s)
    let newbRandoBackgroundRandomizer = new bRandoBackgroundRandomizer();
    if (selector_string != undefined)
      newbRandoBackgroundRandomizer.selector_string = selector_string; // if a selector string was provided store it
    // generate element(s) list
    newbRandoBackgroundRandomizer.elements = document.querySelectorAll(
      newbRandoBackgroundRandomizer.selector_string
    );
    // if elements list is empty
    if (newbRandoBackgroundRandomizer.elements.length == 0) return 1; // selector string returned no elements; abort background randomizer creation
    if (image_url_arr != undefined) newbRandoBackgroundRandomizer.image_url_arr = image_url_arr; // if an image array was was provided store it
    if (interval_ms != undefined) newbRandoBackgroundRandomizer.interval_ms = interval_ms; // if an interval was specified store it
    if (transition_ms != undefined) newbRandoBackgroundRandomizer.transition_ms = transition_ms; // if a transition time was given store it
    if (transition_type != undefined)
      newbRandoBackgroundRandomizer.transition_type = transition_type; // if a transition type was chosen store it
    if (random_order != undefined) newbRandoBackgroundRandomizer.random_order = random_order; // if random order was set store it
    if (background_attachment != undefined)
      newbRandoBackgroundRandomizer.background_attachment = background_attachment; // if background attachment property was given store it

    // Store original transition property
    newbRandoBackgroundRandomizer.og_transition_property =
      newbRandoBackgroundRandomizer.elements[0].style.transition;

    // Store original background properties
    newbRandoBackgroundRandomizer.og_background_size_property =
      newbRandoBackgroundRandomizer.elements[0].style.backgroundSize;
    newbRandoBackgroundRandomizer.og_background_property =
      newbRandoBackgroundRandomizer.elements[0].style.background;

    // Preload images
    // For each image url in the array
    newbRandoBackgroundRandomizer.image_url_arr.forEach(image_url => {
      // If the image has not yet been preloaded in the preload array
      if (!bRando.isPreloadedImg(image_url)) {
        let newImg = document.createElement("img"); // Create new img element
        newImg.style.display = "none"; // Just incase, set it not to display even though it is never added to document

        // When an image cannot be loaded
        newImg.onerror = () => {
          console.error("Error preloading " + newImg.src + "."); // Error loading image
        };

        // When the image finishes loading
        newImg.onload = () => {
          bRando.bRandoPreloadedImgs.push(newImg); // Save preloaded image object to preload array

          // If the background randomizer still does not have an image set
          if (newbRandoBackgroundRandomizer.last_image == -1) newbRandoBackgroundRandomizer.next(); // try to change it to the preloaded image
        };
        newImg.src = image_url; // Set src
      }
    });

    // Check if selector already has a background randomizer handling it
    // Iterate through background randomizers array
    bRando.bRandoBackgroundRandomizers.forEach(bRandoBackgroundRandomizer => {
      // If existing randomizer has same selector string as new randomizer
      if (
        bRandoBackgroundRandomizer.selector_string === newbRandoBackgroundRandomizer.selector_string
      ) {
        // Store original transition property
        newbRandoBackgroundRandomizer.og_transition_property =
          bRandoBackgroundRandomizer.og_transition_property;

        // Store original background properties
        newbRandoBackgroundRandomizer.og_background_size_property =
          bRandoBackgroundRandomizer.og_background_size_property;
        newbRandoBackgroundRandomizer.og_background_property =
          bRandoBackgroundRandomizer.og_background_property;

        bRandoBackgroundRandomizer.remove(); // remove randomizer to avoid duplicate img randomizers
        return; // stop forEach since existing randomizer was already handled
      }
    });

    bRando.bRandoBackgroundRandomizers.push(newbRandoBackgroundRandomizer); // add new background randomizer object to array of randomizers

    // Set transition properties on the element(s)
    newbRandoBackgroundRandomizer.elements.forEach(element => {
      element.style.transition =
        "background " +
        newbRandoBackgroundRandomizer.transition_ms / 1000 +
        "s " +
        newbRandoBackgroundRandomizer.transition_type;
    });

    newbRandoBackgroundRandomizer.next(); // move to first image
    newbRandoBackgroundRandomizer.play(); // start background randomizer

    return newbRandoBackgroundRandomizer; // return new background randomizer object
  },
  // Function for changing all randomizers to next image
  // Returns 0 for success or number of background randomizers which failed to randomize to next image
  nextAll: () => {
    var numErrors = 0; // variable to hold number of errors returned
    // move to next image in all background randomizers
    bRando.bRandoBackgroundRandomizers.forEach(bRandoBackgroundRandomizer => {
      // move to next image
      // if moving to the next image returned an error code
      if (bRandoBackgroundRandomizer.next() != 0) {
        numErrors++; // increase number of randomizers with errors
      }
    });

    return numErrors; // return number of errors
  },
  // Function to pause all randomizers
  // Returns 0 for success or number of background randomizers which are already paused
  pauseAll: () => {
    var numErrors = 0; // variable to hold number of errors returned
    // pause all background randomizers
    bRando.bRandoBackgroundRandomizers.forEach(bRandoBackgroundRandomizer => {
      // pause background randomizer
      // if pausing the background randomizer returned an error code
      if (bRandoBackgroundRandomizer.pause() != 0) {
        numErrors++; // increase number of randomizers with errors
      }
    });
    return numErrors; // return number of errors
  },
  // Function to start all randomizers
  // Returns 0 for success or number of background randomizers which are already playing
  playAll: () => {
    var numErrors = 0; // variable to hold number of errors returned
    // play each background randomizer
    bRando.bRandoBackgroundRandomizers.forEach(bRandoBackgroundRandomizer => {
      // play background randomizer
      // if playing the background randomizer returned an error code
      if (bRandoBackgroundRandomizer.play() != 0) {
        numErrors++; // increase number of randomizers with errors
      }
    });
    return numErrors; // return number of errors
  },
  // Function for removing all randomizers
  // Returns 0 for success
  removeAll: () => {
    let runtimebRandoBackgroundRandomizers = Array.from(bRando.bRandoBackgroundRandomizers); // Make a shallow copy of the background randomizers array to iterate through because we will be modifying the original and we cannot .forEach() through it successfully if the number of items in it changes during runtime
    runtimebRandoBackgroundRandomizers.forEach(bRandoBackgroundRandomizer => {
      bRandoBackgroundRandomizer.remove(); // remove background randomizer
    });
    return 0; // success
  }
};

// background randomizer
class bRandoBackgroundRandomizer {
  // Constructor to set default properties and create state management variables
  constructor() {
    // Property variables
    this.selector_string = "html"; // default selector string is "html"
    this.elements = []; // initially empty; stores element(s) to add a background randomizer to
    // array of image urls to randomize
    this.image_url_arr = [
      // default images
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
      "https://images.unsplash.com/photo-1485841938031-1bf81239b815",
      "https://images.unsplash.com/photo-1543835683-ec5466c68daa",
      "https://images.unsplash.com/photo-1491147334573-44cbb4602074",
      "https://images.unsplash.com/photo-1550353185-761a5da3ee96",
      "https://images.unsplash.com/photo-1449496967047-2a322e78ec26",
      "https://images.unsplash.com/photo-1517789171-f2c4f83f1afd",
      "https://images.unsplash.com/photo-1552084117-56a987666449"
    ];
    this.interval_ms = 10000; // default interval between image rotations
    this.transition_ms = 3000; // default transition time
    this.transition_type = "ease-in-out"; // default transition type
    this.random_order = true; // default to randomize image order
    this.background_attachment = "fixed"; // default is "fixed"
    this.randomizer_id = null; // initially null until set; used to store setInterval function randomizer id

    // State Variables
    this.last_image = -1; // variable for index of last image; -1 indicates no image was used yet
    this.transitioning = false; // variable to keep track of whether the transition animation is taking place
    this.og_transition_property = ""; // variable to hold the original transition property before a background randomizer is added
    this.og_background_size_property = ""; // variable to hold the original background size property before a background randomizer is added
    this.og_background_property = ""; // variable to hold the original background property before a background randomizer is added
  }
  // Function for changing to next image
  // Return codes: 0 - success; 1 - failure already going to next; 2 - failure waiting for image to preload
  next() {
    // if already transitioning to next image per previous call
    if (this.transitioning) return 1; // return error code 1 without changing image to prevent spamming which glitches the transition animation
    this.transitioning = true; // set transitioning variable to true because we are in process of changing images
    let indexOfNextImg = this.last_image; // defaults to last image url

    // If there is one preload image available and it is one of the images for this randomizer
    if (
      bRando.bRandoPreloadedImgs.length == 1 && // The preload array length is 1
      this.image_url_arr.includes(bRando.bRandoPreloadedImgs[0].src) // The preloaded image is one of this randomizer's
    ) {
      // Set the index of the next image to be the one preloaded image
      indexOfNextImg = this.image_url_arr.indexOf(bRando.bRandoPreloadedImgs[0].src);
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
      if (!bRando.isPreloadedImg(this.image_url_arr[indexOfNextImg])) {
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

    // If the background randomizer is playing restart it
    // If randomizer id is found
    if (this.randomizer_id != null) {
      this.pause(); // pause it to clear interval
      this.play(); // play it to create new interval
    }
    return 0; // success
  }
  // Function to pause randomizer
  // Returns 0 if pausing succeeded or 1 if the background randomizer is already paused
  pause() {
    // If there is a randomizer_id to clear
    if (this.randomizer_id != null) {
      clearInterval(this.randomizer_id); // clear setInterval function using stored id
      this.randomizer_id = null; // set id to null
      return 0; // success
    }
    return 1; // background randomizer not playing
  }
  // Function to start a randomizer
  // Returns 0 for success and 1 for already playing
  play() {
    // To prevent spamming randomizers
    // If randomizer id already exists then background randomizer is already playing
    if (this.randomizer_id != null) return 1; // Return with error code 1

    // set an interval to randomize images and store the function id
    this.randomizer_id = setInterval(() => this.next(), this.interval_ms);
    return 0; // success
  }
  // Function for removing a randomizer
  // Returns 0 for success
  remove() {
    this.pause(); // Pause randomizer
    this.elements.forEach(element => {
      element.style.transition = this.og_transition_property; // Revert transition property
      element.style.backgroundSize = this.og_background_size_property; // Revert background size property
      element.style.background = this.og_background_property; // Revert background property
    });
    bRando.bRandoBackgroundRandomizers.splice(bRando.bRandoBackgroundRandomizers.indexOf(this), 1); // Destroy background randomizer
    return 0; // success
  }
}
