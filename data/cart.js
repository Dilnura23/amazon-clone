export let cart;
loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart')) || [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1,
    deliveryOptionId: '1'
  }, {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliveryOptionId: '2'
  }];
}
function saveToStorage (){
  localStorage.setItem('cart', JSON.stringify(cart));
}
//REAL CODE
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
    quantity:quantityProduct,
    deliveryOptionId: '1'
  });
  }
  saveToStorage();
  
  message.classList.add('added-visible');
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
  // updateCartQuantity();
}

export function calculateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach(cartItem=>{
      cartQuantity += cartItem.quantity;
    })
  document.querySelector('.js-display-quantity-home').innerHTML = cartQuantity;
  // document.querySelector('.payment-total-items').innerText = cartQuantity;
  return cartQuantity;
}


export function updateQuantity(productId, newQuantity){
  cart.forEach(cartItem =>{
    if (cartItem.productId == productId){
      cartItem.quantity = newQuantity;
      document.querySelector(`.js-quantity-label-${productId}`).innerHTML = newQuantity;
    }
  });
  saveToStorage();
}


export function saveQuantity(productId, newQuantity){
  if (newQuantity>0 && newQuantity<1000) {
    updateQuantity(productId, newQuantity);
    calculateCartQuantity();
    document.querySelector(`.js-cart-item-container-${productId}`).classList.remove('is-editing-quantity');
  } 
  else {
    alert('Quantity must be in between 0 and 1000');
  }
};

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
  
  cart.forEach((cartItem)=>{
    if (productId == cartItem.productId) {
      matchingItem = cartItem;
    }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}

export function loadCart(fun){
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', ()=>{
    
    console.log(xhr.response)
    fun();
  });
  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
  }

export async function loadCartFetch(){
  const fetchCart = await fetch('https://supersimplebackend.dev/cart')
  const response = await fetchCart.text();
  console.log(response);
  return response;

}






//TO TEST cases JASMINE
// export function addToCart(productId) {
//   let matchingItem;

//   cart.forEach((cartItem) => {
//     if (productId === cartItem.productId) {
//       matchingItem = cartItem;
//     }
//   });

//   if (matchingItem) {
//     matchingItem.quantity += 1;
//   } else {
//     cart.push({
//       productId: productId,
//       quantity: 1,
//       deliveryOptionId: '1'
//     });
//   }

//   saveToStorage();
// }












