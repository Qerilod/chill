// class Character {
//   constructor(description) {
//     (this.name = description.name),
//       (this.age = description.age),
//       (this.hairColor = description.hairColor);
//   }
//   Welcome() {
//     console.log(`Hello im ${this.name}`);
//   }
// }

// const character1 = new Character({
//   name: "Semuel",
//   age: 22,
//   hairColor: "yellow",
// });
// character1.Welcome();
// const character2 = new Character({
//   name: "Stephany",
//   age: 20,
//   hairColor: "Chestnut",
// });
// character2.Welcome();
// const character3 = new Character({
//   name: "Britany",
//   age: 21,
//   hairColor: "black",
// });
// character3.Welcome();

// const character4 = new Character({
//   name: "Beckett",
//   age: 25,
//   hairColor: "Brown",
// });
// character4.Welcome();
// юююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююю
// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
//   room: 27,
// };

// const poly = {
//   username: "Poly",
//   room: 191,
// };
// greet.call(mango, "Welcome");
// class MyClass {
//   constructor(name) {
//     this.name = name;
//   }
//   method1() {
//     console.log("Hello");
//   }
//   method2() {
//     console.log("Hello");
//   }
//   get printName() {
//     return this.name;
//   }
// }
// File.prototype = {};
// console.log(typeof MyClass);
// let user1 = new MyClass("Igor");
// console.log(user1.printName);

// // const animal = {
// //   name: "Animal",
// //   age: 5,
// //   tail: true,
// // };

// class Animal {
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.tail = options.tail;
//   }
//   voice() {
//     console.log("this is dance");
//   }
// }
// const animal = new Animal({
//   name: "Animal",
//   age: 6,
//   tail: true,
// });
// const monkey = new Animal({
//   name: "Robo",
//   age: 7,
//   hasTail: true,
// });

// console.log(robot);
// class RTDS extends Robot {
//   static type = "black";
//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }
//   voice() {
//     console.log("I is the new robot");
//   }
//   get ageInfo() {
//     return this.age * 6;
//   }
//   set ageInfo(newAge) {
//     this.age = newAge;
//   }
// }
// const rtds = new RTDS({
//   name: "Victor",
//   age: 5,
//   model: "Sauthen",
//   mark: false,
// });
