import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary} from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";

//runs everything this it is oop
//import '../data/cart-class.js';
// import '../data/car.js';
//import '../data/backend-practice.js'

//CALLBACKS
loadProducts(()=> {
  renderOrderSummary();
  renderPaymentSummary();
});
