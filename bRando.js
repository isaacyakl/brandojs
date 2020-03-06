/**
 * @name bRando.js
 * @version 0.1.3
 * @description A CSS background property randomizer capable of transitioning between images, colors, and gradients.
 * @author Isaac "yak" L. @isaacyakl www.isaacyakl.com
 * @license MIT License https://isaacyakl.github.io/brandojs/LICENSE
 */

// bRando object
// Used for creating and controlling all background randomizers
const bRando = {
  version: "0.1.3", // Version number string
  bRandoBackgroundRandomizers: [], // background randomizers array
  bRandoPreloadedImgs: [], // Images that have already been preload into the document

  // Function for checking if background property has an image
  // Returns URL of image or 1 if there is no image URL
  extractImgURL: (
    backgroundProperty // background property possibly containing image URL
  ) => {
    // Extract URL if one exists...perhaps I should learn REGEXs...
    if (backgroundProperty.includes("url(")) {
      // If "url(" is present then there is an image
      // Extract image URL
      let imageURL = backgroundProperty
        .substring(backgroundProperty.indexOf("url(") + 5)
        .substring(
          0,
          backgroundProperty
            .substring(backgroundProperty.indexOf("url(") + 5)
            .indexOf(backgroundProperty[backgroundProperty.indexOf("url(") + 4])
        );
      return imageURL; // Return image URL
    }
    return 1; // No image url is present
  },
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
    background_arr, // array of backgrounds
    interval_ms, // ms interval between background changes
    transition_ms, // ms transition duration of background changes
    random_order // randomize backgrounds: true or false
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
    if (background_arr != undefined) newbRandoBackgroundRandomizer.background_arr = background_arr; // if a background array was was provided store it
    if (interval_ms != undefined) newbRandoBackgroundRandomizer.interval_ms = interval_ms; // if an interval was specified store it
    if (transition_ms != undefined) newbRandoBackgroundRandomizer.transition_ms = transition_ms; // if a transition time was given store it
    if (random_order != undefined) newbRandoBackgroundRandomizer.random_order = random_order; // if random order was set store it

    // Store original transition property
    newbRandoBackgroundRandomizer.og_transition_property =
      newbRandoBackgroundRandomizer.elements[0].style.transition;

    // Store original background property
    newbRandoBackgroundRandomizer.og_background_property =
      newbRandoBackgroundRandomizer.elements[0].style.background;

    // Preload images
    // For each background in the array
    newbRandoBackgroundRandomizer.background_arr.forEach(background_prop => {
      // Variable for holding image URL if it exists
      let imgURL = bRando.extractImgURL(background_prop);

      // If the background is an image and has not yet been preloaded in the preload array
      if (imgURL != 1 && !bRando.isPreloadedImg(imgURL)) {
        let newImg = document.createElement("img"); // Create new img element
        newImg.style.display = "none"; // Just incase, set it not to display even though it is never added to document

        // When an image cannot be loaded
        newImg.onerror = () => {
          console.error("Error preloading " + newImg.src + "."); // Error loading image
        };

        // When the image finishes loading
        newImg.onload = () => {
          bRando.bRandoPreloadedImgs.push(newImg); // Save preloaded image object to preload array

          // If the background randomizer still does not have a background set
          if (newbRandoBackgroundRandomizer.last_background == -1)
            newbRandoBackgroundRandomizer.next(); // try to change to the preloaded image background
        };
        newImg.src = imgURL; // Set src
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

        // Store original background property
        newbRandoBackgroundRandomizer.og_background_property =
          bRandoBackgroundRandomizer.og_background_property;

        bRandoBackgroundRandomizer.remove(); // remove randomizer to avoid duplicate background randomizers
        return; // stop forEach since existing randomizer was already handled
      }
    });

    bRando.bRandoBackgroundRandomizers.push(newbRandoBackgroundRandomizer); // add new background randomizer object to array of randomizers

    // Set transition property on the element(s)
    newbRandoBackgroundRandomizer.elements.forEach(element => {
      element.style.transition =
        "background " + newbRandoBackgroundRandomizer.transition_ms / 1000 + "s ease-out";
    });

    newbRandoBackgroundRandomizer.next(); // move to first background
    newbRandoBackgroundRandomizer.play(); // start background randomizer

    return newbRandoBackgroundRandomizer; // return new background randomizer object
  },
  // Function for changing all randomizers to next background
  // Returns 0 for success or number of background randomizers which failed to change backgrounds
  nextAll: () => {
    var numErrors = 0; // variable to hold number of errors returned
    // move to next background in all background randomizers
    bRando.bRandoBackgroundRandomizers.forEach(bRandoBackgroundRandomizer => {
      // move to next background
      // if moving to the next background returned an error code
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
    // array of backgrounds to randomize
    this.background_arr = [
      // default backgrounds
      "url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e')", // image url
      "fixed url('https://images.unsplash.com/photo-1491147334573-44cbb4602074') center no-repeat", // image url with other background properties
      "url('https://images.unsplash.com/photo-1543835683-ec5466c68daa')",
      "url('https://images.unsplash.com/photo-1485841938031-1bf81239b815')",
      "url('https://images.unsplash.com/photo-1550353185-761a5da3ee96')",
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", // horizontal blue linear gradient
      "rgba(131,92,59,1.0)", // brown background color in rgba form
      'url("https://images.unsplash.com/photo-1449496967047-2a322e78ec26")',
      "url('https://images.unsplash.com/photo-1517789171-f2c4f83f1afd')",
      "url('https://images.unsplash.com/photo-1552084117-56a987666449')",
      "#ff00fff0", // magenta background color in hex code with alpha code
      "#6c757d" // medium gray background color
    ];
    this.interval_ms = 10000; // default interval between background changes
    this.transition_ms = 2500; // default transition time
    this.random_order = true; // default to randomize background order
    this.randomizer_id = null; // initially null until set; used to store setInterval function randomizer id

    // State Variables
    this.last_background = -1; // variable for index of last background; -1 indicates no background was used yet
    this.transitioning = false; // variable to keep track of whether the transition animation is taking place
    this.og_transition_property = ""; // variable to hold the original transition property before a background randomizer is added
    this.og_background_property = ""; // variable to hold the original background property before a background randomizer is added
  }
  // Function for changing to next background
  // Return codes: 0 - success; 1 - failure already going to next; 2 - failure waiting for background to preload
  next() {
    // if already transitioning to next background per previous call
    if (this.transitioning) return 1; // return error code 1 without changing background to prevent spamming which glitches the transition animation
    this.transitioning = true; // set transitioning variable to true because we are in process of changing backgrounds
    let indexOfNextBackground = this.last_background; // defaults to last background

    // if randomize is on
    if (this.random_order) {
      // Pick a random next background
      do {
        // Choose a random index for next background between 0 and the background array length minus 1
        indexOfNextBackground = Math.floor(
          Math.random() * (this.background_arr.length - 1 - 0 + 1) + 0
        ); // Math.floor(Math.random() * (max - min + 1) + min);
      } while (this.background_arr.length != 1 && indexOfNextBackground == this.last_background); // while there are more than 1 backgrounds to choose from and the already set background is not chosen again
    } else {
      // else randomize is off
      // Move to next background index or start over the background index
      indexOfNextBackground =
        this.last_background + 1 > this.background_arr.length - 1 // if we have reached the last background
          ? (indexOfNextBackground = 0) // set index to first background
          : (indexOfNextBackground = ++this.last_background); // otherwise set index to the next background (or if we have never set one yet set to the first background and increase last_background value from -1 to 0)
    }

    let imgURL = bRando.extractImgURL(this.background_arr[indexOfNextBackground]);

    // If the chosen background is an image and is not yet preloaded
    if (imgURL != 1 && !bRando.isPreloadedImg(imgURL)) {
      this.transitioning = false; // set transitioning variable to false
      return 2; // return error code 2 without background because the image is not yet preloaded
    }

    // If we got this far
    // Set new background(s)
    this.elements.forEach(element => {
      // Set developers background property
      element.style.background = this.background_arr[indexOfNextBackground];

      // Set defaults if no changes have been set by the dev
      if (element.style.backgroundImage == "initial")
        element.style.backgroundImage =
          "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=)"; // Setting a transparent png helps smooth transitions between color only backgrounds and image backgrounds
      if (element.style.backgroundSize == "initial") element.style.backgroundSize = "cover";
      if (element.style.backgroundRepeat == "initial") element.style.backgroundRepeat = "no-repeat";
      if (element.style.backgroundAttachment == "initial")
        element.style.backgroundAttachment = "fixed";
      if (element.style.backgroundPosition == "initial")
        element.style.backgroundPosition = "center";
    });

    this.last_background = indexOfNextBackground; // Store last background index

    // Add event listener to last element in list to see when transition animation ends
    this.elements[this.elements.length - 1].addEventListener("transitionend", () => {
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

    // set an interval to randomize backgrounds and store the function id
    this.randomizer_id = setInterval(() => this.next(), this.interval_ms);
    return 0; // success
  }
  // Function for removing a randomizer
  // Returns 0 for success
  remove() {
    this.pause(); // Pause randomizer
    this.elements.forEach(element => {
      element.style.transition = this.og_transition_property; // Revert transition property
      element.style.background = this.og_background_property; // Revert background property
    });
    bRando.bRandoBackgroundRandomizers.splice(bRando.bRandoBackgroundRandomizers.indexOf(this), 1); // Remove randomizer from background randomizer array
    return 0; // success
  }
}
