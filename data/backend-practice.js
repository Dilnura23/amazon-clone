const xhr = new XMLHttpRequest();

xhr.addEventListener('load', ()=>{
  console.log(xhr.response);
});
xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');
xhr.send();

//status 404 405 403 our probelm, starts with 4
//status 500, 501 is backend problem

//Backend API = how we interact with something
//look at documentation
