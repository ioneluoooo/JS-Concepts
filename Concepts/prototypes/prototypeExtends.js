const a = { x: 1 }

console.log(a.hasOwnProperty('__proto__')) // false
// it does not have a property __proto__


console.log(a.__proto__.hasOwnProperty('__proto__')) // true
// the __proto__ property refers to the prototype of an object
// the a.__proto__ access the prototype of 'a'
// this prototype is a built-in object and does have
// a property name __proto__

//a.__proto__ referes not to 'a' but to the object prototype it was created

//* To change a prototype for a created object
//* you can use __proto__ or Object.setPrototypeOf

var myProto = { name: "Jake" }
var foo = {}
Object.setPrototypeOf(foo, myProto)
foo.__proto__ = myProto

//*******************
// But there is a nuance with [[Extensible]] slot
// that can 'freeze' our object
// and prevent setting new prototypes to our object
const obj = {}
Object.preventExtensions(obj)
// or Object.seal(obj)
// or Object.freeze(obj)
Object.setPrototypeOf(obj, Function.prototype)
// TypeError, obj is not extensible


//************** Creating an object with new prototypes */

const foo = Object.create(myPrototype)
// or
const foo = {__proto__: myPrototype}
// or
const f = function(){}
f.prototype = myPrototype
const foo = new f()