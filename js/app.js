// Задание 1

const userName = prompt(`Введите имя`);
const surname = prompt(`Введите фамилию`);
const nickname = prompt(`Введите никнейм`);
if (
  (userName != 0 && surname != 0 && nickname != 0) ||
  (userName != 0 && surname != 0 && nickname === "")
) {
  alert(`Привет, ${userName} ${surname}`);
} else if (userName === "" && surname != 0 && nickname != 0) {
  alert(`Привет, ${nickname}`);
} else if (userName != 0 && surname === "" && nickname != 0) {
  alert(`Привет, ${userName}`);
} else if (
  (userName === "" && surname === "" && nickname === "") ||
  surname != 0 ||
  nickname != 0
) {
  alert(`Привет, Noname`);
}

// Задание 2

const num = prompt(`Введите число`);

let res1 = +num > 100 ? `больше ста` : `меньше ста`;
let res2 = +num % 2 === 0 ? `чётное` : `нечётное`;
let res3 = +num % 1 === 0 ? `недробное` : `дробное`;
let res4 = +num > 0 ? `больше нуля` : `меньше нуля`;

alert(`Ваше число ${res1}, ${res2}, ${res3}, ${res4}`);

// Задание 3.1

const numOne = prompt(`Введите первое число`);
const numTwo = prompt(`Введите второе число`);
const numThree = prompt(`Введите третье число`);

// Задание 4

const num1 = +prompt(`Введите число от нуля до девяти`);

switch (num1) {
  case 0:
    alert(`Нуль`)
  case 1:
    alert(`Один`);
  case 2:
    alert(`Два`);
  case 3:
    alert(`Три`);
  case 4:
    alert(`Четыре`);
  case 5:
    alert(`Пять`);
  case 6:
    alert(`Шесть`);
  case 7:
    alert(`Семь`);
  case 8:
    alert(`Восемь`);
  case 9:
    alert(`Девять`);
  default:
    alert(`Введите корректное число`)
}
