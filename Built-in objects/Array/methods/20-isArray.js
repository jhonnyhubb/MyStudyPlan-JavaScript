// console.log(Array.isArray([1, 2, 3]));  // true
// console.log(Array.isArray({foo: 123})); // false
// console.log(Array.isArray('foobar'));   // false
// console.log(Array.isArray(undefined));  // false

// // all following calls return true
// console.log(Array.isArray([]));
// console.log(Array.isArray([1]));
// console.log(Array.isArray(new Array()));
// console.log(Array.isArray(new Array('a', 'b', 'c', 'd')));
// console.log(Array.isArray(new Array(3)));
// // Little known fact: Array.prototype itself is an array:
// console.log(Array.isArray(Array.prototype));

// // all following calls return false
// console.log(Array.isArray());
// console.log(Array.isArray({}));
// console.log(Array.isArray(null));
// console.log(Array.isArray(undefined));
// console.log(Array.isArray(17));
// console.log(Array.isArray('Array'));
// console.log(Array.isArray(true));
// console.log(Array.isArray(false));
// console.log(Array.isArray(new Uint8Array(32)));
// console.log(Array.isArray({ __proto__: Array.prototype }));