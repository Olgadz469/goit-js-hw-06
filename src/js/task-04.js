const refs = {
    buttonIncrement: document.querySelector("[data-action='increment']"),
    buttonDecrement: document.querySelector("[data-action='decrement']"),
    span: document.querySelector('#value'),
  };

  let counterValue = 0;

  function onClickIncrement (event) {
    counterValue += 1;
    refs.span.textContent = counterValue;
  }

  function onClickDecrement (event) {
    counterValue -= 1;
    refs.span.textContent = counterValue;
  }

  refs.buttonIncrement.addEventListener('click', onClickIncrement );
  refs.buttonDecrement.addEventListener('click', onClickDecrement );


// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати 
// і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення 
// лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй 
// значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.