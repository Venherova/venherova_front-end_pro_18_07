function getValidIntInput(message) {
  let number;
  
  do {
      number = parseInt(prompt(message));
  } while (isNaN(number));

  return number;
}

function checkStepDown(stepUp) {
  let stepDown = getValidIntInput('How many step down?');

  while (stepDown > stepUp) {
    alert('incorrect step down. try again!');
    stepDown = getValidIntInput('How many step down?');
  }

  return stepDown;
}

let ladder = {
  step: 0,
  up: function(userStep) {
      this.step = this.step + userStep;
      return this;
  },
  down: function(userStep) {
      this.step = this.step - userStep;
      return this;
  },
  showStep: function() {
      alert(this.step);
  }
};

let upStep = getValidIntInput('How many step up?');
let downStep = checkStepDown(upStep);

ladder.up(upStep).down(downStep).showStep();
