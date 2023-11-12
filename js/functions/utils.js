function updateCountItemsInCart() {
    cartItemsCountEl.innerHTML = cart.length; // 'span:last-child' - кількість доданих продуктів у картці
}

function formatCartData() {
  const formatDataNew = Array.from(new Set(cart)); // Set вилучить дублікати з масиву cart
  const formatData = formatDataNew.map(function(productId) { // map для отримання відповідних об'єктів продуктів
    return products.find(function(product) {
      return product.id === productId;
    });
  });
  return formatData;
}





  
// function formatCartData() {
//   const formatData = Array.from(new Set(cart)); // створює новий масив без дубляжів
//   return formatData;
// }
  
  
/*

formatCart = [
  {
    id: 1,
    qty: 5,
  }
]

*/