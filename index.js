var type = require('component-type');

/**
 * Local variables.
 */

var BrowserSet = window.Set;
var isNative = false;

// Check native Set support
if (BrowserSet) {
  var s = new BrowserSet([1, 2]); // Chrome's Set does not have initial values support
  isNative = s.size == 2;
}

/**
 * Expose `Set`. Use ES6 Set when possible.
 */

module.exports = isNative ? BrowserSet : Set;

/**
 * String optimized `Set` polyfill.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

function Set(values) {
  if (values && !values.forEach)
    throw new TypeError(values + ' is not iterable');

  // set default values
  this.clear();

  // iterate through initial values
  if (values) values.forEach(this.add, this);
}

/**
 * Add `val` to the Set.
 *
 * @param {Mixed} val
 */

Set.prototype.add = function(val) {
  val = prepareVal(val);

  if (isString(val)) {
    this._obj[val] = true;
  } else if(!this.has(val)) {
    this._arr.push(val);
  }
};

/**
 * Check if this Set has `val`.
 *
 * @param {Mixed} val
 * @return {Boolean}
 */

Set.prototype.has = function(val) {
  val = prepareVal(val);
  return isString(val) ? !! this._obj[val] : this._arr.indexOf(val) >= 0;
};

/**
 * Delete `val`.
 *
 * @param {Mixed} val
 */

Set.prototype.delete = function(val) {
  val = prepareVal(val);

  if (isString(val)) {
    delete this._obj[val];
  } else {
    var index = this._arr.indexOf(val);
    if (~index) this._arr.splice(index, 1);
  }
};

/**
 * Empty Set.
 */

Set.prototype.clear = function(){
  this._obj = Object.create(null);
  this._arr = [];
};

/**
 * Returns the number of values in this Set.
 */

Object.defineProperty(Set.prototype, 'size', {
  get: function() {
    return this._arr.length + Object.keys(this._obj).length;
  }
});

// check type to use object container
function isString(val) {
  return typeof val == 'string';
}

// prepare value to be stored as an object key
function prepareVal(val) {
  switch (type(val)) {
    case 'string': return '$' + val;
    case 'number':
    case 'date':
    case 'regexp':
    case 'boolean':
    case 'null':
    case 'undefined': return '' + val;
    default: return val;
  }
}
