import {cart} from '../data/cart.js';
import {products} from '../data/products.js';

let productsHTML = '';


products.forEach((product)=>{
  
  productsHTML+= `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars*10}.png">
      <div class="product-rating-count link-primary">
      ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents/100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class = 'js-quantity-selector-${product.id}'>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart added-to-cart-${product.id}">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart"
    data-product-id = "${product.id}">
      Add to Cart
    </button>
  </div>`;
  
});

let clearMessage = {};
// console.log(productsHTML);
document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach(button =>{
  button.addEventListener('click', ()=>{
    // const productID = button.dataset.productId;
    //USES closures
    const {productId} = button.dataset
    const quantityProduct = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    const message = document.querySelector(`.added-to-cart-${productId}`);
    let matchingItem;
    cart.forEach((item)=>{
      if (productId == item.productID) {
        matchingItem = item;
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
    
    let cartQuantity = 0;
    cart.forEach(item=>{
      cartQuantity += item.quantity;
      
    })
    

    
    message.classList.add('added-visible');

    // let addedButton;
    if (clearMessage[productId]){
      clearTimeout(clearMessage[productID]);
    }
    
    clearMessage[productId] = setTimeout(()=>{
        message.classList.remove('added-visible');
      }, 2000);

  
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    console.log(cartQuantity);
    console.log(cart);
  });

})