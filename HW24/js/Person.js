function Person(name, age) {
  this.name = name;
  this.age = age;

  this.getInfo = () => {
    document.getElementById('personInfo').innerHTML = `Name: ${this.name}, Age: ${this.age}`;
  } 
}
