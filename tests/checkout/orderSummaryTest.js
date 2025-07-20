import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import {loadFromStorage, cart } from "../../data/cart.js";
import { loadProducts, loadProductsFetch } from "../../data/products.js";



describe('test suite: renderOrderSummary', ()=>{
  const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
  const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
  //HOOKS in JASMINE

  //Asynchronous, the responce has not comeback yet
  beforeAll((done)=>{
    loadProductsFetch().then(()=>{
      done();
    });
  });

  beforeEach(()=>{
    spyOn(localStorage, 'setItem')

    



    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: productId2,
        quantity: 1,
        deliveryOptionId: '2'
      }]);
    });
    loadFromStorage();
    // loadProducts(()=>{
    //   renderOrderSummary();
    //   done();
    // });
    document.querySelector('.js-test-container').innerHTML = `
    <div class="js-order-summary"></div>
    <div class="js-display-quantity-home"></div>
    <div class="js-payment-summary"></div>`;
    renderOrderSummary();
  });

  it('display the cart',()=>{
    
  
    const currentTotalQuantiy = document.querySelectorAll('.js-cart-item-container');
  
    expect(currentTotalQuantity.length).toEqual(2);
    
    expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain(`Quantity: 2`);
    expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain(`Quantity: 1`);

    document.querySelector('.js-test-container').innerHTML = '';
    
    console.log('Cart:', cart);
    console.log('Rendered quantity:', document.querySelector(`.js-product-quantity-${productId1}`).innerText);



  });

  it('removes a product', ()=>{

    //simulates delete for 1st product
    document.querySelector(`.js-delete-link-${productId1}`).click();
    //thus quantity should be 1
    expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
    expect(document.querySelector(`.js-cart-item-container-${productId1}`)).toEqual(null);
    expect(document.querySelector(`.js-cart-item-container-${productId2}`)).not.toEqual(null);
    expect(cart.length).toEqual(2);
    
    expect(cart[0].productId).toEqual(productId1);
    

    document.querySelector('.js-test-container').innerHTML = '';
  })
})