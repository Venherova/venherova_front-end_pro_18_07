let btnPlanets = document.getElementById('btn-planets')
btnPlanets.addEventListener('click', () => {
  const planetFields = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain'];
  
  btnPlanets.disabled = true;
  getData('planets').then(({ next, results }) => {
    btnPlanets.disabled = !!results.length;
    generateList(results, 'container-planets', planetFields, next);
  }); 
});

