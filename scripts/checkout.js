import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary} from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
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

//ASYNC = function returns a promise

async function loadPage(){
  //try catch catches the error inside async
  try {
    // throw 'error1'
    await loadProductsFetch();
    //reject is a function that lets us create and error in the future
    //resolve is sucess
    const value = await new Promise ((resolve, reject)=>{
      //synchronous in the future
      // throw 'error2'
      loadCart(()=>{
        //asyncronous in the future
        //reject('error3')
        resolve('value3');
      });
    });
  } 
  catch(error){
  console.log('Unexpected error. Please try again later.');
  }


  //can use await inside of async, function should be async
  
  //OR we can asign const to promise instead of .then value
  // .then((value)=> console.log(value))

  renderOrderSummary();
  renderPaymentSummary();

  
}
loadPage();





// Promise.all([
//   // new Promise ((resolve)=>{
//   //   loadProducts(()=>{
//   //     resolve('value1');
//   //   });
//   // }),
//   loadProductsFetch(),
//   new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve(); //resolve means like done()
//     });
//   })
// ]).then(()=>{
//   // console.log(values)
//   renderOrderSummary();
//   renderPaymentSummary();
// })

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