
const button = document.querySelector('.button');
const rundomNumber = document.querySelector('.number');
const retunnRandomNumber = () => {
  let number;
  number = Math.round(Math.random() * (10 - 1) + 1);
  rundomNumber.textContent = `Білет №: ${number}`;
}

button.addEventListener('click', retunnRandomNumber);