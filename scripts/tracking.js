import { orders } from "../data/orders.js";
import {loadProductsFetch, getProduct} from "../data/products.js"
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {formatCurrency} from "./utils/money.js"
import {cart} from "../data/cart-class.js";

let trackingList = '';

async function loadTrackPage(){
  await loadProductsFetch()
  const url = new URL(window.location.href);
  const orderId = url.searchParams.get('orderId');
  const productId = url.searchParams.get('productId');

  
  orders.forEach(order => {
    // const orderTimeString = dayjs(order.orderTime).format('MMMM DD');
    if (orderId === order.id){
    order.products.forEach((productDetails)=>{
       if (productDetails.productId === productId){
      
      const product = getProduct(productId);
      console.log(productDetails.quantity)
      

  // document.querySelector('.js-order-tracking').a
      
      trackingList+= `
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on Monday, June 13
        </div>

        <div class="product-info">
          ${product.name}
        </div>

        <div class="product-info">
          Quantity: ${productDetails.quantity}
        </div>

        <img class="product-image" src="${product.image}">

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
      `
    }})
}})
  document.querySelector('.js-order-tracking').innerHTML = trackingList;
  cart.calculateCartQuantityFromOrder()
  }
//  document.querySelector('.js-order-tracking').innerHTML = trackingList;
 loadTrackPage();



