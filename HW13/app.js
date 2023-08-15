function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }

    if (degree < 0) {
        return 1 / pow(num, -degree);
    }

    return num * pow(num, degree - 1);
}

function getValidInput(message, type) {
    let number;
    do {
        if (type === 'int') {
            number = parseInt(prompt(message));
        } else if (type === 'float') {
            number = parseFloat(prompt(message));
        }
    } while (isNaN(number));
    return number;
}

let num = getValidInput('Enter the number you want to raise to a power:', 'float');
let degree = getValidInput('Enter the power to which you want to raise the number:', 'int');

alert(`Result: ${pow(num, degree)}`);