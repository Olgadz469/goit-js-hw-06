const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
  };

  refs.input.addEventListener('input', onInputChange);
  
  function onInputChange(event) {
    refs.input = event.currentTarget;
    refs.output.textContent = refs.input.value;
    if (refs.input.value === "") {
        refs.output.textContent = "Anonymous";
    }
  }


  // Напиши скрипт, який під час набору тексту в інпуті 
  // input#name-input (подія input), підставляє його поточне
  // значення в span#name-output. Якщо інпут порожній, у спані 
  // повинен відображатися рядок "Anonymous".