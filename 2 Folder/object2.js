// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);
const obj5 = Object.assign({},obj1, obj2, obj4);
// console.log(obj1)
// console.log(obj5);

// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('name'));

const {name : haha} = tinderUser;
console.log(haha);
