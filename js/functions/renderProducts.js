function renderProducts(parentElSelector, dataArr) {
    const parentEl = doc.querySelector(parentElSelector);
    if (!parentEl) {
      console.warn(`el of selector: ${parentElSelector}, not found !!!`)
      return;
    }
  
    dataArr.forEach(function(product) {
      renderProduct(parentElSelector, product);
    });
}
  
function renderProduct(parentElSelector, dataObj) {
    const parentEl = doc.querySelector(parentElSelector);
    if (!parentEl) {
    console.warn(`el of selector: ${parentElSelector}, not found !!!`)
    return;
    }
}

function renderProduct(parentElSelector, dataObj) {
    const parentEl = doc.querySelector(parentElSelector);
    if (!parentEl) {
        console.warn(`el of selector: ${parentElSelector}, not found !!!`);
        return;
    }

    const product = doc.createElement('div');
    const thumb = doc.createElement('div');
    const img = doc.createElement('img');
    const info = doc.createElement('div');
    const title = doc.createElement('h4');
    const text = doc.createElement('p');
    const priceBlock = doc.createElement('div');
    const price = doc.createElement('div');
    const btnAddToCart = doc.createElement('button');

    product.className = mainClass;
    product.dataset.id = dataObj.id;

    thumb.className = `${mainClass}__thumbnail`;
    thumb.innerHTML = `<img src="${dataObj.img}" alt="" class="img-product">`;

    info.className = `${mainClass}__info`;

    title.className = `${mainClass}__title`;
    title.innerHTML = dataObj.title;

    text.className = `${mainClass}-text`;
    text.innerHTML = dataObj.description;

    priceBlock.className = `${mainClass}__price-block`;

    price.className = `${mainClass}__price`;
    price.innerHTML = dataObj.price;

    btnAddToCart.className = `${mainClass}__add-cart`;
    btnAddToCart.innerHTML = 'Buy';

    btnAddToCart.onclick = function() {
        cart.push(dataObj.id);
        updateCountItemsInCart();
    }
    
    thumb.append(img);
    priceBlock.append(price, btnAddToCart);
    info.append(title, text, priceBlock);
    product.append(thumb, info);
    parentEl.append(product);
}














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
//