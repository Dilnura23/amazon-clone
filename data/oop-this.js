/*
const date = new Date();
console.log(date);
console.log(date.toLocaleTimeString());
*/

/*console.log(this);

//no access, 'this' cant refer, no object to point to
const object2 = {
  a:2,
  b:this.a
};*/

/*
//undefined in regular function but can change using .call
function logThis(){
  console.log(this);
}
logThis();
//.call changes 'this' to 'hello'
logThis.call('hello');

//'this' keeps the value that it had outside of the arrow function
//arrow functions do not change the value of 'this'
const object3 = {
  method: ()=> {
    console.log(this);
  }
};
object3.method();*/