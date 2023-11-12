const doc = document;
const cartEl = doc.querySelector('.cart'); // картка
const cartItemsCountEl = cartEl.querySelector('span:last-child'); // кількість доданих продуктів у картці

const productsSelector = '.products';
// Крапка перед 'products' позначає, 
// що це селектор класу в CSS-стилях або методах DOM

const mainClass = 'product';
// для створення або модифікації класів елементів (наприклад, зміна класу в JavaScript)

const display = doc.querySelector('.background-for-window'); // затемнення фону для картки продуктів
const addBlockProducts = doc.querySelector('.window-order'); // вікно зі списком вибраних товарів
const imgCloseBtn = doc.querySelector('.close-img-bg');