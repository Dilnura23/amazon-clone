
import { orders } from "../data/orders.js";
import {loadProductsFetch, getProduct} from "../data/products.js"
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {cart} from "../data/cart-class.js";


let trackingList = '';


async function loadTrackPage() {
  await loadProductsFetch();
  const url = new URL(window.location.href);
  const orderId = url.searchParams.get('orderId');
  const productId = url.searchParams.get('productId');

  orders.forEach(order => {
    if (orderId === order.id) {
      order.products.forEach((productDetails) => {
        if (productDetails.productId === productId) {
          const product = getProduct(productId);
          const today = dayjs();
          const orderTime = dayjs(order.orderTime);
          const deliveryTime = dayjs(productDetails.estimatedDeliveryTime);
          const percentProgress = ((today - orderTime) / (deliveryTime - orderTime))*100;

          

          console.log(`Delivery progress: ${percentProgress.toFixed(2)}%`);

          // Add to HTML
          trackingList += `
            <a class="back-to-orders-link link-primary" href="orders.html">
              View all orders
            </a>

            <div class="delivery-date">
              Arriving on ${deliveryTime.format('MMMM DD')}
            </div>

            <div class="product-info">${product.name}</div>
            <div class="product-info">Quantity: ${productDetails.quantity}</div>
            <img class="product-image" src="${product.image}">

            <div class="progress-labels-container">
            <div class="progress-label ${
              percentProgress < 50 ? 'current-status' : ''
            }">Preparing</div>
            <div class="progress-label ${
              (percentProgress >= 50 && percentProgress < 100) ? 'current-status' : ''
            }">Shipped</div>
            <div class="progress-label ${
              percentProgress >= 100 ? "current-status" : ''
            }">Delivered</div>
            </div>

            <div class="progress-bar-container">
              <div class="progress-bar" style="width: ${percentProgress}%;"></div>
            </div>
          `;

          
         
        }
      });
    }
  });


  document.querySelector('.js-order-tracking').innerHTML = trackingList;

  cart.calculateCartQuantityFromOrder();
}

loadTrackPage();


