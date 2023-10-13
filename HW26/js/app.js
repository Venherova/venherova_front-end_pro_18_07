function createHamburger() {
  const form = document.getElementById('hamburgerForm');
  let size, stuffing;

  switch(form.size.value) {
      case 'small': size = Hamburger.SIZE_SMALL; 
      break;
      case 'large': size = Hamburger.SIZE_LARGE; 
      break;
  }

  switch(form.stuffing.value) {
      case 'cheese': stuffing = Hamburger.STUFFING_CHEESE; 
      break;
      case 'salad': stuffing = Hamburger.STUFFING_SALAD; 
      break;
      case 'potato': stuffing = Hamburger.STUFFING_POTATO; 
      break;
  }

  const hamburger = new Hamburger(size, stuffing);
  
  if (form.mayo.checked) {
      hamburger.addTopping(Hamburger.TOPPING_MAYO);
  }
  if (form.sauce.checked) {
      hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  }

  hamburger.displayResult();
}




