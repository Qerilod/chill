// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів.
// Функція має повертати масив імен усіх користувачів(властивість name) із масиву users.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.

// const getUserNames = (users) => {
//   return users.map((users) => users.name);
// };

// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів
// другий параметр friendName — ім’я друга для пошуку.
// Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName.Друзі кожного користувача
// зберігаються у властивості friends.Якщо користувачів, у яких є такий других немає, то функція має повернути порожній масив.

// Поради:

// Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну умову.
// Використовуй метод includes() для перевірки, чи масив friends містить friendName.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// const getUsersWithFriend = (users, friendName) => {
//   const Dash = users.filter((user) => user.friends.includes(friendName));
//   return Dash.length > 0 ? Dash : [];
// };

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме один параметр users — масив об’єктів користувачів.

// Функція має повертати масив усіх користувачів, відсортованих за спаданням кількостій їх друзів (властивість friends).

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
// const sortByDescendingFriendCount = (users) => {
//   const frUp = users.toSorted((onefr, twofr) => twofr.length - onefr.length);
//   return frUp;
// };

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female",
//     },
//   ])
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів(властивість balance),
//   стать яких(властивість gender) збігається зі значенням параметра gender.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// const getTotalBalanceByGender = (users, gender) => {
//   const WhyUGender = users
//     .filter((user) => user.gender === gender)
//     .reduce((acc, user) => acc + user.balance, 0);
//   return WhyUGender;
// };

// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811,
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821,
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793,
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278,
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951,
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498,
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

// Задача про книги в бібліотеці:
// Вам потрібно вивести заголовки всіх книг, авторами яких є жінки. Використайте методи filter, map та forEach.

// javascript
// Copy code
// const libraryBooks = [
//   { title: "Гордість і упередження", author: "Джейн Остін" },
//   { title: "Анна Кареніна", author: "Лев Толстой" },
//   { title: "Троє в човні, не рахуючи собаки", author: "Джером К. Джером" },
//   // інші книги...
// ];

// ваш код тут

// Задача про покупки в інтернет-магазині:
// Ви хочете знайти суму всіх товарів в кошику, які дешевше за 1000 грн. Використайте метод filter та reduce.

// const shoppingCart = [
//   { product: "Смартфон", price: 1200 },
//   { product: "Навушники", price: 800 },
//   { product: "Планшет", price: 1500 },
//   // інші товари...
// ];
// const HelpPls = (produ) => {
//   const OkBro = produ
//     .filter((prod) => prod.price < 1000)
//     .reduce((acc, prod) => acc + prod.price, 0);
//   return OkBro;
// };

// console.log(HelpPls(shoppingCart));

// const cars = [
//   {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "Silver",
//     price: 25000,
//   },
//   {
//     brand: "Honda",
//     model: "Civic",
//     year: 2019,
//     color: "Blue",
//     price: 22000,
//   },
//   {
//     brand: "Ford",
//     model: "Escape",
//     year: 2021,
//     color: "Red",
//     price: 28000,
//   },
//   {
//     brand: "Chevrolet",
//     model: "Malibu",
//     year: 2018,
//     color: "Black",
//     price: 20000,
//   },
//   {
//     brand: "Nissan",
//     model: "Altima",
//     year: 2022,
//     color: "White",
//     price: 27000,
//   },
// ];

// const getModel = (cars) => {
//   const thisModel = [];
//   cars.forEach((car) => {
//     thisModel.push(car.model);
//   });
//   return thisModel;
// };

// const getModel = (cars) => {
//   const thisModel = cars.map((car) => car.model);
//   return thisModel;
// };
// console.log(getModel(cars));

// const num = [1, 67, 8, 2, 79, 124, 6, 9, 1415, 5698569, 55, 222];
// const help = (num) => {
//   return num.filter((nu) => nu >= 100);
// };
// console.log(help(num));
const cars = [
  {
    brand: "Toyota",
    model: "Camry",
    year: false,
    color: "Silver",
    price: 2500,
  },
  {
    brand: "Honda",
    model: "Civic",
    year: true,
    color: "Blue",
    price: 2095,
  },
  {
    brand: "Ford",
    model: "Escape",
    year: false,
    color: "Red",
    price: 280,
  },
  {
    brand: "Chevrolet",
    model: "Malibu",
    year: true,
    color: "Black",
    price: 1600,
  },
  {
    brand: "Nissan",
    model: "Altima",
    year: false,
    color: "White",
    price: 2700,
  },
];
// const Noup = 2100;
// const carsPrice = (cars, Noup) => {
//   return cars.filter((cars) => cars.price <= Noup);
// };
// console.log(carsPrice(cars, 2100));
const resaaf = (cars) => {
  return cars.filter((car) => car.year).map((car) => car.model);
};
console.log(resaaf(cars));
