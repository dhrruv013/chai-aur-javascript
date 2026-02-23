// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async is wokring");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Then is working");
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 2000);
// })
//   .then(function () {
//     console.log("Working fine");
//   })
//   .catch(function () {
//     console.log("Not working");
//   });

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   //   let response = await promiseFive;
//   //   console.log(response);
//   try {
//     let response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// ----------------------------------------------------------

// let promiseSix = new Promise((resolve, reject) => {
//   let response = fetch("https://jsonplaceholder.typicode.com/users");
//   resolve(response);
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch(() => console.log("You got error"));

// ----------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(() => console.log("You got error"));

// ----------------------------------------------------------

// async function getAllUser() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);

//     const data = await response.json();
//     console.log(data);
//     // setInterval(()=> console.log(data), 1000)
//   } catch (error) {
//     console.log("error");
//   }
// }

// getAllUser();
