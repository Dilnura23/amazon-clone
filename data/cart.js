export let cart = JSON.parse(localStorage.getItem('cart')) || [{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 1
}, {
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 1
}];


function saveToStorage (){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart (productId){
  let matchingItem;
  const quantityProduct = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
  const message = document.querySelector(`.added-to-cart-${productId}`);
  
  cart.forEach((cartItem)=>{
    if (productId == cartItem.productId) {
      matchingItem = cartItem;
    }
    });

  if (matchingItem){
    matchingItem.quantity+=quantityProduct;
  }
  else {
    cart.push ({
    productId: productId,
    quantity:quantityProduct
  });
  }
  saveToStorage();
  
  message.classList.add('added-visible');

  // let addedButton;
  const clearMessage = {};

  if (clearMessage[productId]){
    clearTimeout(clearMessage[productId]);
  }
  
  clearMessage[productId] = setTimeout(()=>{
      message.classList.remove('added-visible');
    }, 2000);
  
  
  console.log(cart);
};

export function removeFromCart (productId) {
  const newCart = [];
  cart.forEach((cartItem)=>{
    if(cartItem.productId!== productId) {
      newCart.push(cartItem)
    }
  });
  cart = newCart;
  
  saveToStorage();
}



