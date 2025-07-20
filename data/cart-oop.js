// OOP
//this gives us outer object, this=cart
function Cart(localStorageKey){
   const cart = {
    cartItems: undefined,

    loadFromStorage(){
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOptionId: '1'
      }, {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '2'
      }];
    },

    saveToStorage(){
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },

    addToCart (productId){
      let matchingItem;
      const quantityProduct = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
      const message = document.querySelector(`.added-to-cart-${productId}`);
      
      this.cartItems.forEach((cartItem)=>{
        if (productId == cartItem.productId) {
          matchingItem = cartItem;
        }
        });
    
      if (matchingItem){
        matchingItem.quantity+=quantityProduct;
      }
      else {
        this.cartItems.push ({
        productId: productId,
        quantity:quantityProduct,
        deliveryOptionId: '1'
      });
      }
      this.saveToStorage();
      
      message.classList.add('added-visible');
    },

    removeFromCart (productId) {
      const newCart = [];
      this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId!== productId) {
          newCart.push(cartItem)
        }
      });
      this.cartItems = newCart;
      this.saveToStorage();
      // updateCartQuantity();
    },

    calculateCartQuantity(){
      let cartQuantity = 0;
      this.cartItems.forEach(cartItem=>{
          cartQuantity += cartItem.quantity;
        })
      document.querySelector('.js-display-quantity-home').innerHTML = cartQuantity;
      // document.querySelector('.payment-total-items').innerText = cartQuantity;
      return cartQuantity;
    },

    updateQuantity(productId, newQuantity){
      this.cartItems.forEach(cartItem =>{
        if (cartItem.productId == productId){
          cartItem.quantity = newQuantity;
          document.querySelector(`.js-quantity-label-${productId}`).innerHTML = newQuantity;
        }
      });
      this.saveToStorage();
    },

    saveQuantity(productId, newQuantity){
      if (newQuantity>0 && newQuantity<1000) {
        this.updateQuantity(productId, newQuantity);
        this.calculateCartQuantity();
        document.querySelector(`.js-cart-item-container-${productId}`).classList.remove('is-editing-quantity');
      } 
      else {
        alert('Quantity must be in between 0 and 1000');
      }
    },

    updateDeliveryOption(productId, deliveryOptionId) {
      let matchingItem;
      
      this.cartItems.forEach((cartItem)=>{
        if (productId == cartItem.productId) {
          matchingItem = cartItem;
        }
        });
        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }


  };
  return cart;
}
 
const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');








cart.loadFromStorage();
//notworking because it is a new object have  by default, need to change
// cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');


businessCart.loadFromStorage();


// console.log(cart);
// console.log(businessCart);




// console.log('cart snapshot:', JSON.parse(JSON.stringify(cart.cartItems)));
// console.log('businessCart snapshot:', JSON.parse(JSON.stringify(businessCart.cartItems)));







