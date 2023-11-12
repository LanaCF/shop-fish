function renderProducts(parentElSelector ,dataArr) {
    const parentEl = doc.querySelector(parentElSelector);
    if (!parentEl) {
      console.warn(`el of selector: ${parentElSelector}, not found !!!`)
      return;
    }
  
    dataArr.forEach(function(product) {
      renderProduct(parentElSelector, product);
    });
}
// Ця функція очікує два аргументи - селектор parentElSelector та масив даних про продукти dataArr.
// перевіряє, чи чи був знайдений елемент з вказаним селектором (parentEl). 
// Якщо елемент не був знайдений, вона виводить повідомлення в консоль (console.warn), 
// що елемент не знайдено, і завершує виконання функції за допомогою return.
// Якщо елемент знайдено, то виконується інша функція (нижче).
  
function renderProduct(parentElSelector, dataObj) {
    const parentEl = doc.querySelector(parentElSelector);
    if (!parentEl) {
    console.warn(`el of selector: ${parentElSelector}, not found !!!`)
    return;
    }
}
// Ця функція очікує два аргументи - селектор parentElSelector та об'єкт даних 
// про конкретний продукт dataObj.


function renderProduct(parentElSelector, dataObj) {
    const parentEl = doc.querySelector(parentElSelector);
    if (!parentEl) {
        console.warn(`el of selector: ${parentElSelector}, not found !!!`);
        return;
    }

    const product = doc.createElement('div');
    const thumb = doc.createElement('div');
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
        updateCountItemsInCart(); // кількість доданих продуктів у картці
        
        // addProducts(cart, products);
    }
    
    priceBlock.append(price, btnAddToCart);
    info.append(title, text, priceBlock);
    product.append(thumb, info);
    parentEl.append(product);
}
// додає елементи в DOM


// function addProducts(selectedProductIds, allProducts) {
//     selectedProductIds.forEach(function(productId) {
//         const selectedProduct = allProducts.find(function(product) {
//             return product.id === productId;
//         });
        
//         if(selectedProduct) {
//             arrNew.push(selectedProduct);
//         }
//     });

//     return arrNew;
// }












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