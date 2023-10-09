function Car(brand, model, engineSize, engineType) {
  this.brand = brand;
  this.model = model;
  this.engineSize = engineSize;
  this.engineType = engineType;
  this.owner = null;

  Car.prototype.getInfo = () => {
    const ownerInfo = this.owner ? `${this.owner.name}, Age: ${this.owner.age}` : 'No owner';
    document.getElementById('carInfo').innerHTML = `Brand: ${this.brand}, Model: ${this.model}, Engine size: ${this.engineSize}, Engine type: ${this.engineType}, Owner: ${ownerInfo}`;
  } 

  Car.prototype.setOwner = (person) => {
    if(person instanceof Person) {
      this.owner = person;
    } else {
      console.error('Owner must be an instance of Person');
    }
  }
}
