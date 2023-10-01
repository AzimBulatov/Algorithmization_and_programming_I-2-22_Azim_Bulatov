let num = 47;
let sum = 0;

if (num >= 10 && num <= 99) { 
  sum = (num / 10) + (num % 10); 
  if (sum <= 9) {
    console.log('Сумма цифр однозначна');
  } else {
    console.log('Сумма цифр двухзначна');
  }
} else {
  console.log('Число не находится в диапазоне от 10 до 99');
}