let btnVehicle = document.getElementById('btn-vehicles')
btnVehicle.addEventListener('click', () => {
  const vehicleFields = ['name', 'manufacturer', 'cost_in_credits', 'length', 'passengers', 'cargo_capacity', 'vehicle_class'];
  
  btnVehicle.disabled = true;
  getData('vehicles').then(({ next, results }) => {
    btnVehicle.disabled = !!results.length
    generateList(results, 'container-vehicles', vehicleFields, next);
  }); 
});
