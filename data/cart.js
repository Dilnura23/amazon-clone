export const cart = [];

export function addToCart (productId){
  const quantityProduct = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
  const message = document.querySelector(`.added-to-cart-${productId}`);
  let matchingItem;
  cart.forEach((cartItem)=>{
    if (productId == cartItem.productID) {
      matchingItem = cartItem;
    }
    });
  if (matchingItem){
    matchingItem.quantity+=quantityProduct;
  }
  else {
    cart.push ({
    productID: productId,
    quantity:quantityProduct
  });
  }
  
  message.classList.add('added-visible');

  // let addedButton;
  if (clearMessage[productId]){
    clearTimeout(clearMessage[productId]);
  }
  
  clearMessage[productId] = setTimeout(()=>{
      message.classList.remove('added-visible');
    }, 2000);
  
  
  console.log(cart);
};