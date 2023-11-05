const doc = document;
const cartEl = doc.querySelector('.cart');
const cartItemsCountEl = cartEl.querySelector('span:last-child');
const productEl = doc.querySelector('.products');


let cartItemsCount = 0;

const arr = products.map(function(item) {
    return `
    <div class="product">
        <div class="product__thumbnail">
            <img src="${item.img}" alt="" class="img-product">
        </div>

        <div class="product__info">
            <h4 class="product__title">${item.title}</h4>
            <p class="product-text">
                ${item.description}
            </p>
            <div class="product__price-block">
                <div class="product__price">${item.price}</div>
                <button class="product__add-cart">buy</button>
            </div>  
        </div>
    </div>
    `
}).join('');

productEl.innerHTML = arr;

const addCartBtn = doc.querySelectorAll('.product__add-cart');

addCartBtn.forEach(function(item) {
    item.onclick = function() {
        cartItemsCount ++;
        cartItemsCountEl.innerHTML = cartItemsCount;
    }
});