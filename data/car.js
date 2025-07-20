
export class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen=false;

  constructor(carDetails){
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
    
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen? 'open': 'closed'
    return console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h ${trunkStatus}`);
  }

  go(){
    if (this.isTrunkOpen === false) {
      this.speed+=5;
    }
    if (this.speed>200){
      this.speed = 200;
    }

  }
  
  brake(){
    this.speed-=5;

    if (this.speed<0 ){
      this.speed= 0;
    }
  }

  openTrunk(){
    if (this.speed === 0){
      this.isTrunkOpen = true;
    }
  }

  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla',
  
});

const car2 = new Car ({
  brand: 'Tesla',
  model: 'Model 3',
  
})


//trunk is closed since car is moving
// car1.openTrunk();
// car1.displayInfo();
// car1.closeTrunk();
// car1.go();
// car1.go();
// car1.go();
// car1.openTrunk();
// car1.go();
// console.log(car1.speed);
// car1.displayInfo();


// //trunk is open since car is not moving
// car2.go();
// car2.displayInfo();
// car2.brake();
// car2.brake();
// car2.openTrunk();
// car2.displayInfo();



class RaceCar extends Car {
  acceleration;

  constructor(carDetails){
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go(){
    this.speed+= this.acceleration;
    if(this.speed>300){
      this.speed = 300;
    }
  }
  openTrunk(){
    console.log('Race cars do not have a trunk');
  }
  closeTrunk(){
    console.log('Race cars do not have a trunk');
  }

}

const race1 = new RaceCar(
  {
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20
  }
)

race1.go();
race1.go();
race1.go();
console.log(race1.speed);
race1.displayInfo();
race1.brake();
console.log(race1.acceleration);