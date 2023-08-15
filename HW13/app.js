function pow(num, degree) {
    if (degree === 0) return 1;
    if (degree < 0) return 1 / pow(num, -degree);
    return num * pow(num, degree - 1);
}

let num = parseFloat(prompt('Enter the number you want to raise to a power:'));
let degree = parseInt(prompt('Enter the power to which you want to raise the number:'));

alert(`Result: ${pow(num, degree)}`);