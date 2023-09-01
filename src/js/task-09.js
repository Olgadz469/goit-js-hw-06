function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const span = document.querySelector(".color");

btnChangeColor.addEventListener("click", onChangeColor );

function onChangeColor(event) {
  event.preventDefault();
  const color = getRandomHexColor();

  document.body.style.background = color;
  span.textContent = color;
}




// Напиши скрипт, який змінює кольори фону елемента <body> через 
// інлайн-стиль по кліку на button.change-color і виводить значення 
// кольору в span.color.