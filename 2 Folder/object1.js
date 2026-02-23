// singleton
// Object.create

// Object Literal

let mySym = Symbol("key1");
// console.log(mySym);

const jsUser = {
  name: "Dhruv",
  age: 18,
  location: "jaipur",
  email: "dhruv@google.com",
  [mySym]: "key1",
};
// Object.freeze(jsUser)
// console.log(typeof jsUser[mySym]);
console.log(jsUser[mySym]);
// jsUser.email = 'ram@google.com';
// console.log(jsUser);
