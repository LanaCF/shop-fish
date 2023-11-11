function updateCountItemsInCart() {
    cartItemsCountEl.innerHTML = cart.length;
  }
  
  function formatCartData() {
    const formatData = Array.from(new Set(cart));
    console.log(formatData);
    return formatData;
  }
  
  
  /*
  
  formatCart = [
    {
      id: 1,
      qty: 5,
    }
  ]
  
  */