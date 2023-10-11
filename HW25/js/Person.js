class Person {
  constructor(fullname) {
    this.fullname = fullname;
  }

  showInfo(parentElement) {
    console.log('Name: ' + this.fullname);

    const personInfo = document.createElement('p');
    personInfo.textContent = 'Name: ' + this.fullname;
    parentElement.appendChild(personInfo);
  }
}