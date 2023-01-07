Creating a background changer does not immediately change the background. Each selected element will first display whatever background is set by your CSS styles. Then, after the time set with the [timeout](../interfaces/Options.html#timeout) option has passed, it will change the background(s).

If you would like the background changer to immediately load the first background, call [next](../classes/bRando.html#next) right after creation.

```javascript
const demo = bRando.create(); // create a background changer
demo.next(); // immediately change to one of the backgrounds
```

This will cause the background changer to load with one of the values you set with the [backgrounds](../interfaces/Options.html#backgrounds) option.
