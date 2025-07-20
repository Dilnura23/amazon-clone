import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary} from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart} from "../data/cart.js";
//runs everything this it is oop
//import '../data/cart-class.js';
// import '../data/car.js';
//import '../data/backend-practice.js'


//Promise-waits for the function till it finishes
//when u run promise, it allows multiple things at 
//the same time (loadproducts() resolve, same time as loadproducts renderorder())
//KEEPS code flat
//RESOLVE lets us control when to go next step

//runs promises in ALL at the same time and then move
Promise.all([
  new Promise ((resolve)=>{
    loadProducts(()=>{
      resolve('value1');
    });
  }),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve(); //resolve means like done()
    });
  })
]).then((values)=>{
  console.log(values)
  renderOrderSummary();
  renderPaymentSummary();
})

/*new Promise ((resolve)=>{
  //first do loadProducts, resolve is like saying wait until previous code finishes then move next step
  loadProducts(()=>{
    resolve('value1');
  });

}).then((value)=> {
  console.log(value) //value1
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve(); //resolve means like done()
    });
  });

}).then(()=>{
  console.log('hi')
  renderOrderSummary();
  renderPaymentSummary();

});*/

//CALLBACKS -
//Cons - multiple callback cause a lot of nesting
//Promises flat
/*loadProducts(()=> {
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
 
});*/

//