// const planets = ["Earth", "Mars", "Venus"];
// const Crar = planets[0];
// const vfvf = planets[1];

// console.log(`${Crar} and ${vfvf} the best planets`);

// const planets = ["Earth", "Mars", "Venus", "Uranus"];
// planets[0] = "gg";
// planets[2] = "wp";
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// const result = planets.slice(1, 3);
// console.log(result); // ["Mars", "Venus"]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function slugify(title) {
//   const tittles = title.toLowerCase().split(" ").join("-");
//   return tittles;
// }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   } else {
//     return newArray.slice();
//   }
// }

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   return newArray.length > maxLength
//     ? newArray.slice(0, maxLength)
//     : newArray.slice();
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// function filterArray(numbers, value) {
//   const numArray = [];
//   for (let number of numbers) {
//     if (value < number) {
//       numArray.push(number);
//     }
//   }
//   return numArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// const numbers = [10, 15, 20, 25];
// function calculateAverage(numbers) {
//   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//   const average = sum / numbers.length;
//   return average;
// }

// console.log(calculateAverage(numbers)); // Очікується: 17.5

// Напиши функцію mergeArrays,
//   яка приймає два масиви(firstArray та secondArray) і об'єднує
//   їх у новий масив.Новий масив повинен містити усі унікальні елементи з обох вхідних масивів.

// function mergeArrays(firstArray, secondArray) {
//   const our = firstArray.concat(secondArray);
//   return our;
// }

// const firstArray = [1, 2, 3];
// const secondArray = [3, 4, 5];
// console.log(mergeArrays(firstArray, secondArray)); // Очікується: [1, 2, 3, 4, 5]

// Ітерація за допомогою for ... of:
// Напиши функцію countLetters, яка приймає рядок(text) та повертає об'єкт,
// в якому ключі - це літери, а значення - кількість їх входжень у рядок.Усі літери повинні бути в нижньому регістрі.

// function countLetters(text) {
//   for (const tex of text) {

//   }

// }

// const text = "Hello, World!";
// console.log(countLetters(text)); // Очікується: { h: 1, e: 1, l: 3, o: 2, ',': 1, ' ': 1, w: 1, r: 1, d: 1, '!': 1 }

// Напиши функцію sumEvenNumbers, яка приймає масив чисел (numbers) та повертає суму всіх парних чисел у масиві.
// function sumEvenNumbers(numbers) {
//   let result = 0;
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       result += number;
//     }
//   }
//   return result;
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(sumEvenNumbers(numbers)); // Очікується: 12

// Перевернути рядок у масиві:
// Напиши функцію reverseStringArray, яка приймає масив рядків(strings)
// та повертає новий масив, де кожен рядок з існуючого масиву перевернутий задом наперед.

// function reverseStringArray(strings) {
//   let sum = [];
//   for (const string of strings) {
//     let qwq = string.split("").reverse().join("");
//     sum.push(qwq);
//   }
//   return sum;
// }

// const strings = ["apple", "banana", "cherry"];
// console.log(reverseStringArray(strings)); // Очікується: ["elppa", "ananab", "yrrehc"]

// Фільтрація строкових значень:
// Напиши функцію filterStrings, яка приймає масив різних типів значень
//   (mixedArray) та повертає новий масив, в якому залишаються лише рядки

// function filterStrings(mixedArray) {
//   let result = [];
//   for (let array of mixedArray) {
//     if (typeof array === "string") {
//       result.push(array);
//     }
//   }
//   return result;
// }

// const mixedArray = [1, "apple", true, "banana", 42, "cherry"];
// console.log(filterStrings(mixedArray)); // Очікується: ["apple", "banana", "cherry"]
// ююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююю

// const names = ["Oleh", "Ivan", "Petro", "Anna"];
// console.log(names[2]);

//
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

//

// const lastElement = courses[courses.length - 1];
// console.log(lastElement);

// console.log(courses);
// if (courses.length) {
//   console.log("DO");
// }

// console.log(lastElement);
// console.table(courses);
// console.log([0]);
// console.log([1]);
// console.log([2]);
// console.log([3]);

// courses[1] = "Jacob";
// courses[3] = "Adrian";
// console.table(courses);

// console.log(courses.length);

// const lastIndex = courses.length - 1;
// console.log(lastIndex);
// const welcome = ["Semuel", "Stephany", "Vilet", "Daniel"];
// for (let i = 0; i < welcome.length; i++) {
//   console.log(`You alive, goodmorning ${welcome[i]}`);
// }

// const nums = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let dontpara = 0;
// let para = 0;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 === 0) {
//     para += nums[i];
//   } else {
//     dontpara += nums[i];
//   }
// }

// for (const num of nums) {
//   if (num % 2 === 0) {
//     para += num;
//   } else dontpara += num;
// }
// console.log(dontpara);
// console.log(para);

// function PrintInfo(names = "", phones = "") {
//   const nameArray = names.split(",");
//   const numArray = phones.split(",");
//   for (let i = 0; i < nameArray.length; i++) {
//     console.log(`${nameArray[i]} has this number: ${numArray[i]}`);
//   }
// }

// PrintInfo(
//   "Jacob, William, Solomon, Artemis",
//   "89001234567, 89001112233,88730459713,89375119483"
// );
// function Time(min) {
//   const hours = Math.floor(min / 60).toString();
//   const mins = (min % 60).toString();
//   return `${hours.padStart(2, "0")}:${mins.padStart(2, "0")}`;
// }
// console.log(Time(88));
// console.log(Time(146));
// console.log(Time(1800));

// function combineWords(wordsArray) {
//   const result = [];
//   for (const word of wordsArray) {
//     result.push(word);
//   }
//   return result.join(" ");
// }

// const wordsArray = ["Hello", "world", "from", "ChatGPT"];
// console.log(combineWords(wordsArray)); // Очікується: "Hello world from ChatGPT"

// function splitString(stringi) {
//   const x = stringi.split(" ");
//   return x;
// }

// const stringi = "JavaScript is awesome";
// console.log(splitString(stringi)); // Очікується: ["JavaScript", "is", "awesome"]

// Створення підмасиву:
// Напишіть функцію createSubarray, яка приймає масив і два індекси
// та повертає новий масив, який містить елементи вказаного діапазону.Використайте метод slice().

// function createSubarray(inputArray) {
//   const newArray = inputArray.slice(1, 4);
//   return newArray;
// }

// const inputArray = [10, 20, 30, 40, 50, 60];
// const startIndex = 1;
// const endIndex = 4;

// console.log(createSubarray(inputArray, startIndex, endIndex));
// // Очікується: [20, 30, 40]

// Перевірка наявності елементу:
// Напишіть функцію checkElement, яка приймає масив і значення, та повертає true,
//   якщо це значення присутнє в масиві, і false в іншому випадку.Використайте метод indexOf().

// function checkElement(inputArray, targetValue) {
//   return inputArray.includes(targetValue) ? true : false;
// }

// const inputArray = ["apple", "banana", "orange", "grape"];
// const targetValue = "orange";

// console.log(checkElement(inputArray, targetValue));

// Напишіть функцію addElements, яка приймає масив та додаткові елементи, і повертає новий масив,
//   який містить всі елементи вихідного масиву та додаткові елементи.Використайте метод push().

// function addElements(initialArray, extraElements) {
//   const cc = initialArray;
//   for (let c of extraElements) {
//     cc.push(c);
//   }
//   return cc;
// }

// const initialArray = [1, 2, 3];
// const extraElements = [4, 5, 6];

// console.log(addElements(initialArray, extraElements)); // Очікується: [1, 2, 3, 4, 5, 6]
