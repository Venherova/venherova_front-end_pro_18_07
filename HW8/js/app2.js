let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let positiveSum = positiveCount = negativeCount = 0;
let oddPositiveCount = evenPositiveCount = 0;
let oddPositiveSum = evenPositiveSum = 0;
let positiveProduct = 1;
let min = arr[0], minIndex = 0, max = arr[0], maxIndex = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveSum += arr[i];
        positiveCount++;
        positiveProduct *= arr[i];

        if (arr[i] % 2 === 0) {
            evenPositiveCount++;
            evenPositiveSum += arr[i];
        } else {
            oddPositiveCount++;
            oddPositiveSum += arr[i];
        }
    } else if (arr[i] < 0) {
        negativeCount++;
    }

    if (arr[i] < min) {
        min = arr[i];
        minIndex = i+1;
    }

    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i+1;
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== max) {
        arr[i] = 0;
    }
}

console.log('Sum of positive elements: ' + positiveSum);
console.log('Number of positive elements: ' + positiveCount);
console.log('The minimum element of the array: ' + min + ', its serial number: ' + minIndex);
console.log('The maximum element of the array: ' + max + ', its serial number: ' + maxIndex);
console.log('Number of negative elements: ' + negativeCount);
console.log('Number of odd positive elements: ' + oddPositiveCount);
console.log('Number of paired positive elements: ' + evenPositiveCount);
console.log('The sum of paired positive elements: ' + evenPositiveSum);
console.log('Sum of odd positive elements: ' + oddPositiveSum);
console.log('The product of positive elements: ' + positiveProduct);
console.log('Array after zeroing all elements except the maximum: ' + arr);






