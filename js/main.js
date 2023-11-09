let cartItemsCount = 0;



const addCartBtn = doc.querySelectorAll('.product__add-cart');

addCartBtn.forEach(function(item) {
    item.onclick = function() {
        cartItemsCount ++;
        cartItemsCountEl.innerHTML = cartItemsCount;
    }
});

function createListProd(parentEl, dataProd) {
    const product = doc.createElement('div');
    const thumbnail = doc.createElement('div');
    const img = doc.createElement('img');
    const info = doc.createElement('div');
    const title = doc.createElement('h4');
    const text = doc.createElement('p');
    const priceBlock = doc.createElement('div');
    const price = doc.createElement('div');
    const btnAddToCart = doc.createElement('button');
}

    product.className = mainClass;
    product.dataset.id = dataProd.id;

    thumbnail.className = `${mainClass}__thumbnail`;

    img.className = `img-${mainClass}`;
    img.innerHTML = dataProd.img;

    info.className = `${mainClass}__info`;

    title.className = `${mainClass}__title`;
    title.innerHTML = dataProd.title;

    text.className = `${mainClass}-text`;
    text.innerHTML = dataProd.description;

    priceBlock.className = `${mainClass}__price-block`;

    price.className = `${mainClass}__price`;
    price.innerHTML = dataProd.price;

    btnAddToCart.className = `${mainClass}__add-cart`;
    btnAddToCart.innerHTML = 'Buy';

    product.append(thumbnail, info);
    thumbnail.append(img);

    info.append(title)


// const arr = products.map(function(item) {
//     return `
//     <div class="product">
//         <div class="product__thumbnail">
//             <img src="${item.img}" alt="" class="img-product">
//         </div>

//         <div class="product__info">
//             <h4 class="product__title">${item.title}</h4>
//             <p class="product-text">
//                 ${item.description}
//             </p>
//             <div class="product__price-block">
//                 <div class="product__price">${item.price}</div>
//                 <button class="product__add-cart">buy</button>
//             </div>  
//         </div>
//     </div>
//     `
// }).join('');

// productEl.innerHTML = arr;