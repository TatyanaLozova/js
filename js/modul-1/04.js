const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice = pricePerDroid * orderPieces; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

// Write code under this line
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (credits >= totalPrice) {
  message =
    "Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов";
} else  (totalPrice > credits) {
  message = ACCESS_DENIED;
}

console.log(message);
