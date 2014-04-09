*This repository is a mirror of the [component](http://component.io) module [gingkoapp/set](http://github.com/gingkoapp/set). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/gingkoapp-set`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# set

  ES6 Set Polyfill. It returns native Set, when it's possible.
  In opposite of [component/set](https://github.com/component/set),
  this implementation is hash optimized, and have much better performance.
  It uses ES5 methods and supports IE9+ browsers.

  Once TC39 will standardize new set features, I will update this repo.
  For now, from by point of view, we can rely only on this methods.

## Installation

  Install with [component(1)](http://component.io):

    $ component install gingkoapp/set

## Example

```js
var Set = require('set');

// initialize set
var set = new Set(['hello', 1, true]);
set.size; // 3
set.has('hello'); // true
set.has(true); // true
set.has('1'); // false

// add new values
var sampleFn = function() {};
set.add(sampleFn);
set.has(sampleFn); // true
set.has(function() {}); // false

// delete and clear
set.delete(1);
set.delete(true);
set.clear();
set.size; // 0
```

## API

  Read Set description on MDN for more details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

### Set(values)

  Create a new Set with values array. If an iterable object is passed, all of its elements will be added to the new Set.

### #add(value)

  Add value to the set.

### #delete(value)

  Delete value by key. Returns `undefined`.

### #has(value)

  Check if value is present.

### #clear()

  Remove all values from the set.

### #size

  Returns the number of values in the set.

## License

  MIT, [Gingko App](https://gingkoapp.com)
