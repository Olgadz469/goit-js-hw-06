const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
  };

  refs.input.addEventListener('input', onInputChange);
  
  function onInputChange(event) {
    refs.input = event.currentTarget;
    refs.span.style.fontSize = refs.input.value + "px";
   
  }


  // Напиши скрипт, який реагує на зміну значення input#font-size-control 
  // (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість 
  // font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір 
  // тексту.