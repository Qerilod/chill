// const fullName = "Jacob Mercer";
// const firstName = fullName.slice(0, 5);
// const lastName = fullName.slice(6);

// // console.log(fullName); // "Jacob Mercer"
// // console.log(firstName); // "Jacob"
// // console.log(lastName); // "Mercer"

// function welcome() {
//   console.log(`Hello boy ${firstName} your fucking lastname ${lastName}?`);
// }
// welcome();

// const cypher = "illysian";
// const bigCypher = cypher.toLocaleUpperCase();
// console.log(cypher);
// console.log(bigCypher);

// function calculateTotal(number) {
//   let num = 0;
//   let result = 1;
//   while (result <= number) {
//     num += result;
//     result++;
//   }
//   return num;
// }

// calculateTotal(1);
// calculateTotal(3); //повертає 6
// calculateTotal(0); //повертає 0
// calculateTotal(18); //повертає 171
// calculateTotal(24);

// Функція calculateTotal(number) приймає ціле число(параметр number).
//  Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці
//  до цього числа включно.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// ююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююююю

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   let totalPrice = quantity * pricePerDroid;
//   return totalPrice > customerCredits
//     ? "Insufficient funds!"
//     : `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, maxLength) + "...";
//   }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a feli

// function checkForSpam(message) {
//   const mess = message.toLowerCase();
//   return mess.includes("sale") || mess.includes("spam") ? true : false;
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача
//     (параметр country) і повертати повідомлення про результат.Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів
// Зі списку видно, що доставка можлива не скрізь.Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок
// "Sorry, there is no delivery to your country".

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function getShippingCost(country) {
//   let price = "";
//   switch (country) {
//     case "China":
//       price = 100;
//       break;
//     case "Chile":
//       price = 250;
//       break;
//     case "Australia":
//       price = 170;
//       break;
//     case "Jamaica":
//       price = 120;
//       break;
//     default:
//       price = "Sorry, there is no delivery to your country";
//   }
//   return `Shipping to ${country} will cost ${price} credits`;
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// function checkNumber(number) {
//   if (number < 0) {
//     return "Від'ємне";
//   } else if (number === 0) {
//     return "Нуль";
//   } else {
//     return "Додатнє";
//   }
// }
// console.log(checkNumber(-101));
// console.log(checkNumber(241124));
// console.log(checkNumber(0));
// console.log(checkNumber(-214));

// Задача на розгалуження:
// Напиши функцію checkNumber, яка приймає число і повертає рядок "Додатнє", "Від'ємне" або "Нуль", залежно від введеного числа.

// Задача на цикли:
// Напиши функцію sumMultiples, яка приймає число limit і обчислює
// суму всіх чисел, які є кратними 3 або 5 і менші за limit.Використай цикл для перебору чисел.

// function sumMultiples(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumMultiples(34));
// console.log(sumMultiples(354));
// console.log(sumMultiples(55));
// console.log(sumMultiples(3324));

// Задача на логічні оператори:
// Напиши функцію isAdult, яка приймає два параметри: вік та булеве значення, що вказує на наявність документів.
// Функція повинна повертати true, якщо особі 18 або більше років або якщо вона має відповідні документи.

// function isAdult(age, document) {
//   if (age >= 18 || document === true) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isAdult(age, document) {
//   return age >= 18 || document === true ? true : false;
// }

// console.log(isAdult(20, true)); // Очікується: true
// console.log(isAdult(16, true)); // Очікується: true
// console.log(isAdult(25, false)); // Очікується: true
// console.log(isAdult(15, false)); // Очікується: false

// Напиши функцію printPattern, яка приймає число n і виводить на консоль паттерн зі зірочок. Наприклад, для n = 3 вивід має бути наступним:

// function printPattern(n) {
//   for (let i = 0; index < n; i++) {
//     n === "*";
//   }
//   return n.length;
// }

// const n = 3;
// printPattern(n);

// function printPattern(n) {
//   let num = "";
//   for (let i = 0; i <= n; i++) {
//     num += i;
//     if (num === n.toString()) {
//       console.log("*");
//     } else if (num.length === n) {
//       console.log(num);
//     }
//   }
// }

// Перевірка функції для n = 3
// printPattern(3);

// function printPattern(n) {
//   let num = "";
//   for (let i = 0; i <= n; i++) {
//     num += i;
//     if (num === "*") {
//       console.log("*");
//     } else if (num.length === n) {
//       console.log(num);
//     }
//   }
// }

// // Перевірка функції для n = 3
// printPattern(3);
// function printPattern(n) {
//   let num = "";
//   for (let i = 0; i <= n; i++) {
//     zv += i;
//     zv = zv - i + num;
//   }
//   return zv;
// }

// function printPattern(n) {
//   let zv = "";
//   for (let i = 1; i <= n; i++) {
//     zv += "*".repeat(i) + "\n";
//   }
//   return zv;
// }

// function printPattern(n) {
//   let zv = "";
//   for (let i = 0; i < n; i++) {
//     zv += "*";
//     console.log(zv);
//   }
// }

// // Перевірка функції для n = 3
// printPattern(3);
