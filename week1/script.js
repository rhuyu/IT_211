const firstName = "Randy";
const lastName = "Huynh";
let monthsOfStudy = 3;
let goal = "explore tech and land a job";


// Blueprint (Constructor/Class)
function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  // Creating objects based on the blueprint
  let car1 = new Car("Toyota", "Camry");
  let car2 = new Car("Honda", "Civic");
  
  // Accessing object properties
  console.log(car1.make); // Output: "Toyota"
  console.log(car2.model); // Output: "Civic"
  
