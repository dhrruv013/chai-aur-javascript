// for
// forof - map works, object doesn't ,array works
// forin - object works,map don't , in array print index
// forEach - array, array of obj
// Map


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// for(let i = 0; i < 10; i++){
//     console.log(i);
    
// }

// const arr = [1, 2, 3, 4, 5];

// for (const ele of arr) {
//     console.log(`${ele}0`);
// }

const JsUser = {
  name: "Hitesh",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
};
// console.log(JsUser);
// console.log(Object.keys(JsUser));
// obj are not iterable
// for (const ele of JsUser) {
//     console.log();   
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

// for (const [,ele] of map) {
//     console.log(ele);
// }
for (const key in  map) {
    // console.log(key);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const element of programming) {
    // console.log(element);
}
for (const key in programming) {
//   console.log(programming[key]);
}

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach( (ele,index,arr) => {
    console.log(arr[index].languageName, arr[index].languageFileName);
    console.log(ele.languageName);
    
})