// const Pers = {
//   name: "Semuel",
//   character: {
//     character1: "funny",
//     character2: "dontfunny",
//     character3: "sad",
//   },
//   hair: "yellow",
// };
// fun

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potion.push(potionName);
//   },
// };

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getBooks() {
//     return this.books;
//   },
// };

// const Dilo = {
//   info: [
//     { names: "Igor", age: 43 },
//     { names: "Pasha", age: 22 },
//   ],
//   getHomo() {
//     return this.info;
//   },
//   addInfo(newInfo) {
//     this.info.push(newInfo);
//   },
//   seredunka() {
//     let result = 0;
//     for (const ag of this.info) {
//       result += ag.age;
//     }
//     return result / this.info.length;
//   },
// };

// Dilo.addInfo({ names: "Sem", age: 20 });
// console.log(Dilo.seredunka());

// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products
//  і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.

// function isEnoughCapacity(products, containerSize) {
//   let sum = 0;
//   for (let product of Object.values(products)) {
//     sum += product;
//     if (sum > containerSize) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій,
//   які спортсмен споживав протягом тижня.Функція очікує один параметр: days — масив об’єктів.Кожен об’єкт описує
//   день тижня та кількість калорій calories, спожитих спортсменом, у цей день.Візьми код нижче і встав після оголошення
//   своєї функції для перевірки коректності її роботи.У консоль будуть виведені результати її викликів.
// function calcAverageCalories(days) {
//   let result = 0;
//   if (days.length === 0) {
//     return 0;
//   }
//   for (let day of Object.values(days)) {
//     result += day.calories;
//   }
//   const fullResult = result / days.length;
//   return fullResult;
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

// Об’єкт profile описує профіль користувача на ігровій платформі.У його властивостях зберігається ім’я
// профілю username та кількість активних годин playTime, проведених у грі.

// const profile = {
//   username: "Jacob",
//   playTime: 300,

//   changeUsername(newName) {
//     if (this.username !== newName) {
//       this.username = newName;
//     }
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// Задача 1:
// Створіть об'єкт car для опису характеристик автомобіля. Додайте властивості,
// такі як brand, model, year, і початковий mileage.Використайте об'єкт для представлення конкретного автомобіля.
// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   mileage: 0,
// };

// console.log(car); // { brand: 'Toyota', model: 'Camry', year: 2022, mileage: 0 }

// Створіть масив students з декількома об'єктами student.
// Реалізуйте функцію getTopStudents(students), яка повертає масив
//  студентів з найвищим середнім балом.

// const students = [
//   { name: "Alice", age: 20, grades: [90, 85, 92] },
//   { name: "Bob", age: 22, grades: [88, 94, 87] },
//   { name: "Charlie", age: 21, grades: [95, 91, 89] },
//   { name: "Sem", age: 221, grades: [65, 100, 55] },
//   { name: "olexandr", age: 20, grades: [22, 41, 80] },
//   { name: "Vilet", age: 19, grades: [77, 88, 99] },
// ];

// function getTopStudents(students) {
//   for (const student of students) {
//   returnMath.max(student);
// }
// }
// Додайте нову властивість до попереднього об'єкта, наприклад, "рівень віри у силу". Потім змініть значення іншої властивості, наприклад, ім'я персонажа.

// const character = {
//   names: "Sem",
//   age: 7208,
//   force: "89lvl",
//   history:
//     "he lived a great and wonderful life, he died in a garbage dump, its a pity, its amazing!",
// };
// console.log(character);

// Задача: Напиши функцію calcTotalDistance(runs), яка повертає загальну дистанцію,
//   яку бігун пройшов протягом тижня.Функція очікує один параметр: runs — масив об'єктів. Кожен об'єкт
//   містить відомості про один біговий тренування, включаючи дистанцію в кілометрах distance та час в хвилинах time.
//   Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.У консоль будуть виведені результати її викликів.

// function calcTotalDistance(runs) {
//   let Result = 0;
//   for (const run of runs) {
//     Result += run.distance;
//   }
//   return Result;
// }

// console.log(
//   calcTotalDistance([
//     { day: "monday", distance: 5, time: 30 },
//     { day: "tuesday", distance: 7, time: 45 },
//     { day: "wednesday", distance: 8, time: 50 },
//     { day: "thursday", distance: 6, time: 35 },
//     { day: "friday", distance: 10, time: 60 },
//     { day: "saturday", distance: 12, time: 75 },
//     { day: "sunday", distance: 9, time: 55 },
//   ])
// ); // 55

// console.log(
//   calcTotalDistance([
//     { day: "monday", distance: 4, time: 25 },
//     { day: "tuesday", distance: 6, time: 40 },
//     { day: "wednesday", distance: 8, time: 55 },
//     { day: "thursday", distance: 5, time: 30 },
//     { day: "friday", distance: 7, time: 45 },
//     { day: "saturday", distance: 10, time: 70 },
//     { day: "sunday", distance: 12, time: 80 },
//   ])
// ); // 52

// console.log(calcTotalDistance([])); // 0

// const styles = ["Джаз", "Блюз"];
// styles.push("Рокенролл");
// const index = styles.indexOf("Блюз");
// styles[index] = "Класика";
// console.log(styles.shift());
// styles.unshift("Реп", "Реггі");
// // console.log(styles);
// console.log(styles);

// const history = "LALALALLA";
// const valueHis = "BARAKA";
// const user = {
//   name: "Lilo",
//   age: 22,
//   [history]: valueHis,
// };
// console.log(user[history]);
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "HTML",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }
// for (const key in Object.values[user]) {
//   if (key === "hobby") {
//     user.key === user;
//   }
// }
// console.log(user);

// const salaries = {
//   Sem: 100,
//   Kem: 160,
//   Dem: 130,
// };

// let sum = 0;
// if (sum === 0) {
//   return 0;
// }
// for (const key of Object.values(salaries)) {
//   sum += key;
// }
// console.log(sum);
