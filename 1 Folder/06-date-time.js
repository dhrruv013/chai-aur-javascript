// console.log(Date());
// console.log(new Date().getTime());

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let createdDate = new Date(2026, 2, 29);
// console.log(createdDate.toLocaleDateString())

// let myTimeStamp = Date.now();
// console.log(Math.floor(myTimeStamp / 1000));

let dateTime = new Date();

console.log(
  dateTime.toLocaleString("default", {
    weekday: "long",
    month: "long",
  })
);
