Creating a background changer does not immediately change the background. Each selected element will first display whatever background is set by your CSS styles. Then, after the time set by the [timeout](../interfaces/Options.html#timeout) option has elapsed, it will change the background.

If you would like the background changer to immediately load the first background, call [next](../classes/bRando.html#next) right after creation.

```javascript
const bgChanger = bRando.create(options); // create a background changer
bgChanger.next(); // immediately change to one of the backgrounds
```

This will cause the background changer to load with one of the values set by the [backgrounds](../interfaces/Options.html#backgrounds) option.
