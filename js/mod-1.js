// const litera = "QWERTY";
// console.log(typeof litera);
// const x = 8;
// const y = 5;
// console.log(x + y);
// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"

// const mamba = "kebab";
// const zamba = 44;
// const welcome = `Hello ${mamba}! you dead through ${zamba} years ago :)`;
// console.log(welcome);
// console.log(mamba.length);

// const product = "Repair droid";
// console.log(product[0]); // 'R'
// console.log(product[5]); // 'r'
// console.log(product[11]); // 'd'

// const product = "kebhdhdtjadjdtjadjttdjsrjtjrsjrtjjrymrsmrmrmab";
// console.log(product[product.length - 1]);

// console.log(Number("5")); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0

// console.log(Number(undefined)); // NaN
// console.log(Number("Jacob")); // NaN
// console.log(Number("25px")); // NaN

// console.log("10" + 5);

// Number.parseInt();
// console.log(Number.parseInt("4697375")); // 5
// console.log(Number.parseInt("5")); // 5
// console.log(Number.parseInt("5.5")); // 5
// console.log(Number.parseInt("5cm")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("cm5")); // NaN

// console.log(Number.parseFloat("5")); // 5
// console.log(Number.parseFloat("5.5")); // 5.5
// console.log(Number.parseFloat("3.14")); // 3.14
// console.log(Number.parseFloat("5cm")); // 5
// console.log(Number.parseFloat("5.5cm")); // 5.5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("cm5")); // NaN
// console.log(Number.parseFloat("")); // NaN
// console.log(Number.parseFloat("qweqwe")); // NaN

// Math.floor(num);
// console.log(Math.round(1.3)); // 1
// console.log(Math.round(1.7)); // 1
// console.log(Math.ceil(1.3)); // 2
// console.log(Math.ceil(1.7)); // 2

// function Gepard() {
//   console.log("Very good");
// }

// Gepard();

// function aboba(a, b, c) {
//   return a + b + c;
// }
// console.log(aboba(2, 3, 5));

// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// function getElementWidth(content, padding, border) {
//   const result =
//     Number.parseFloat(content) +
//     Number.parseFloat(padding) * 2 +
//     Number.parseFloat(border) * 2;
//   return result;
// }
// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// function calculateTotalPrice(price, quantity, discount) {
//   const vine = ((price * quantity) / 100) * discount;
//   const result = price * quantity - vine;
//   return result;
// }

// console.log(calculateTotalPrice(50, 3, 10)); // 135
// console.log(calculateTotalPrice(30, 5, 5)); // 142.5
// console.log(calculateTotalPrice(100, 2, 20)); // 160

// function formatFullName(firstName, lastName, title) {
//   let result = undefined;
//   if (firstName === result && lastName === result) {
//     return " не вказані дані";
//   } else if (title === undefined) {
//     return ` ${firstName} ${lastName} `;
//   } else {
//     return ` ${title} ${firstName} ${lastName}  `;
//   }
// }

// console.log(formatFullName("John", "Doe", "Mr.")); // Mr. John Doe
// console.log(formatFullName("Alice", "Johnson", "Mrs.")); // Mrs. Alice Johnson
// console.log(formatFullName("Bob", "Smith")); // Bob Smith
// console.log(formatFullName()); // Не вказані дані

// Функція повинна повертати рядок, який представляє повне ім'я користувача, враховуючи титул,
// якщо він вказаний.Якщо титул відсутній, повертати тільки ім'я та прізвище. Якщо які-небудь
// із вхідних параметрів відсутні, повертати рядок "Не вказані дані".
