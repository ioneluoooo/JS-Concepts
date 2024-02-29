const array = [1, 2, 3];

//* first method 
class CheckArray {
  instanceCheck(array) {
    if (array instanceof Array) {
      return true;
    }
  }

  isArrayCheck(array) {
    if (Array.isArray(array)) {
      return true;
    }
  }

  prototypeCheck(array) {
    if (Object.prototype.toString.call(array) === "[object Array]") {
      return true;
    }
  }

  constructorCheck(array) {
    if (array.constructor === Array) {
      return true;
    }
  }
}

//* second method 
function checkArray(value) {
  return (
    value &&
    typeof value === "object" &&
    typeof value.length === "number" &&
    typeof value.splice === "function" &&
    !value.propertyIsEnumerable("length") &&
    (value.length === 0 || (value.length > 0 && value.length - 1 in value))
  );
}

// First, we ask if the value is truthy.
// We do this to reject null and other falsy values.
// Second, we ask if the typeof value is 'object'.
// This will be true for objects, arrays, and (weirdly) null.
// Third, we ask if the value has a length property that is a number.
// This will always be true for arrays, but usually not for objects.
// Fourth, we ask if the value contains a splice method.
// This again will be true for all arrays.
// Finally, we ask if the length property is enumerable (will length be produced by a for in loop?).
// That will be false for all arrays.
// This is the most reliable test for arrayness that I have found.

//* third method
function isArray(value) {
  return !!value.reduce;
}

//* fourth
function isArray(value) {
  return !!value.flat;
}

//* fifth
function isArray(value) {
  return !!value.slice;
}

//* sixth
let arrayPrototype = Object.getPrototypeOf([])

console.log(
  Object.getOwnPropertyNames(array).filter(
    (method) => typeof arrayPrototype[method] === "function"
  )
);

//* seventh
function isArray(obj) {
  return !!(obj && obj.concat && obj.unshift && !obj.callee)

  // obj.callee is deprecated but might work in older browsers >:(
}

