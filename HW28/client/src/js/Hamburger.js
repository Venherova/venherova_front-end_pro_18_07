class Hamburger {
  /**
   * @param {number} size
   * @param {number} stuffing
   * @param {Topping []} toppings
   */
  static SIZE_SMALL = { price: 0, calories: 20 };
  static SIZE_LARGE = { price: 50, calories: 40 };
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };
  static TOPPING_MAYO = { price: 20, calories: 5 };
  static TOPPING_SAUCE = { price: 15, calories: 0 };

  constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = [];
  }
  addTopping(topping) {
    if (!this.toppings.includes(topping)) {
        this.toppings.push(topping);
    }
  }

  calculateCalories() {
    return this.size.calories + this.stuffing.calories + this.toppings.reduce((total, topping) => total + topping.calories, 0);
  }

  calculatePrice() {
    return this.size.price + this.stuffing.price + this.toppings.reduce((total, topping) => total + topping.price, 0);
  }

  displayResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Calories: ${this.calculateCalories()}</p>
        <p>Price: ${this.calculatePrice()}</p>
    `;
  }
}

export default Hamburger;