const allItems = document.querySelectorAll('.item');
const allItemsQty = allItems.length;

console.log(`Number of categories: ${allItemsQty} `);

allItems.forEach((element) => {

    let elementTitle = element.querySelector('h2').textContent;
    
    let elementItems = element.querySelectorAll('li').length;
    
      console.log(`Category: ${elementTitle}`);
      console.log(`Elements: ${elementItems}`);
    
    });
    
    
//     Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і 
// виведе в консоль текст заголовку елемента (тегу <h2>) і кількість 
// елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() 
// і властивості навігації по DOM.



