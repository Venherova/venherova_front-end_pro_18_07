let btnPeople = document.getElementById('btn-people')
btnPeople.addEventListener('click', () => {
  const peopleFields = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'];
  
  btnPeople.disabled = true;
  getData('people').then(({ next, results }) => {
    btnPeople.disabled = !!results.length;
    generateList(results, 'container-people', peopleFields, next);
  }); 
});
