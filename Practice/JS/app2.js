let distanceKm = parseInt(prompt('Enter distance in kilometers'));
let distanceFt = parseInt(prompt('Enter distance in feet'));

const distanceFtToKm = distanceFt * 0.305 / 1000;

if (distanceFtToKm < distanceKm) {
  console.log(`Distance in ${ distanceFt } ft is smaller`);
} else if (distanceFtToKm > distanceKm) {
  console.log(`Distance in ${ distanceKm } km is smaller`);
} else {
  console.log('Distance is equal');
}