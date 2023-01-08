#### Timing Values

Never set the [transition](#transition) [duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) longer than the [timeout](#timeout).

```javascript
// DO NOT SET transition > timeout

// Bad
const options = {
    transition: "5000ms", // transition duration set to 5 seconds
    timeout: 3000, // time between backgrounds set to 3 seconds
    ...
}

// Bad
bgChanger.transition = "5000ms"; // transition duration set to 5 seconds
bgChanger.timeout = 3000; // time between backgrounds set to 3 seconds
```

If it is longer, the transition to a new background will not complete before the next background is set, causing background changes to glitch past animations.
