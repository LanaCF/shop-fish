cartEl.onclick = function() {
    display.style.display = 'initial';
    renderCart();
}
  // при натисканні на картку з'являється фон на весь екран, щоб краще видно було список обраних товарів
  // і форма для списку
  
function renderCart() {
  const formatCart = formatCartData(cart); // беремо новий масив без дублікатів
  let sumTotalAddProd = 0;

  formatCart.forEach(function(cartItem) {
    const block = doc.createElement('div');
    const boxImg = doc.createElement('div');
    const boxTitle = doc.createElement('div');
    const boxQuantity = doc.createElement('div');
    const boxSum = doc.createElement('div');
    const title = doc.createElement('p');
    const quantity = doc.createElement('p');
    const sum = doc.createElement('p');
    const imgDel = doc.createElement('div');

    block.className = `${mainClass}-add-block`;
    
    boxImg.className = `${mainClass}-add-box`;
    boxImg.innerHTML = `<img src="${cartItem.img}" alt="" class="product-add-icon">`;

    boxTitle.className = `${mainClass}-add-box`;
    boxQuantity.className = `${mainClass}-add-box`;
    boxSum.className = `${mainClass}-add-box`;
  
    title.className = `${mainClass}-add-title`;
    title.innerHTML = cartItem.title;

    quantity.className = `${mainClass}-add-title`;
    quantity.innerHTML = quantityAddProducts(cart, cartItem.id);

    sum.className = `${mainClass}-add-title`;
    sum.innerHTML = quantityAddProducts(cart, cartItem.id) * cartItem.price + money;
    sumTotalAddProd = sumTotalAddProd + quantityAddProducts(cart, cartItem.id) * cartItem.price;

    imgDel.className = `${mainClass}-add-box`;
    imgDel.innerHTML = `<img src="img/close.png" alt="" class="close-img">`;

    addBlockProducts.append(block);
    block.append(boxImg, boxTitle, boxQuantity, boxSum, imgDel);
    boxTitle.append(title);
    boxQuantity.append(quantity);
    boxSum.append(sum);

    imgDel.onclick = function() {
      block.style.display = 'none';
      cartItemsCountEl.innerHTML = cart.length - quantityAddProducts(cart, cartItem.id);
      sumTotalAddProd = sumTotalAddProd - quantityAddProducts(cart, cartItem.id) * cartItem.price;
      totalSum.innerHTML = sumTotalAddProd;
    }
  });
  
  const totalBox = doc.createElement('div');
  const totalText = doc.createElement('h4');
  const totalSum = doc.createElement('h4');

  totalBox.className = `total`;
  totalText.className = `total-text`;
  totalText.innerHTML = 'До сплати:';
  totalSum.className = `total-sum`;
  totalSum.innerHTML = sumTotalAddProd;

  addBlockProducts.append(totalBox);
  totalBox.append(totalText, totalSum);

  console.log(formatCart);
}

function quantityAddProducts(arr, id) { // arr = cart / id = cartItem.id
  let sumAdd = 0;

  arr.forEach(function(item) {
    if (item === id) {
      sumAdd += 1;
    }
  });

  return sumAdd;
}

// function quantityAddProducts(arr) { // arr = cart
  


// }














// display.onclick = function() {
//   display.style.display = 'none';
// }

imgCloseBtn.onclick = function() {
  display.style.display = 'none';
}



















  
  /*
  
  1. img Product1 1 x 100 = 100  x
  2. img Product2 3 x 200 = 600  x
  3. img Product3 1 x 300 = 300  x
  ----------------------------
  total: 600
  
  */