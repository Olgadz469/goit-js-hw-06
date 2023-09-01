const input = document.querySelector("#validation-input");
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    const inputDataLength = Number(input.dataset.length);
    const inputValueLength = Number(input.value.length);

    if (inputValueLength === inputDataLength) {
        
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
        else {
            input.classList.remove('valid')
            input.classList.add('invalid')

        }
    }

    // Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
    // перевіряє його вміст щодо правильної кількості введених символів.

    // Яка кількість символів повинна бути в інпуті, зазначається в його 
    // атрибуті data-length.
    // Якщо введена правильна кількість символів, то border інпуту стає 
    // зеленим, якщо неправильна кількість - червоним.
    // Для додавання стилів використовуй CSS-класи valid і invalid, 
    // які ми вже додали у вихідні файли завдання.