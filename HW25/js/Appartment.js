class Appartment {
  /**
   * @param {number} number 
   * @param {number} roomsAmount 
   * @param {People []} people 
   */
  constructor(number, roomsAmount, people) {
    this.number = number;
    this.roomsAmount = roomsAmount;
    this.people = people;
  }

  showInfo(parentElement) {
    console.log(` 
      Number: ${this.number} 
      Rooms: ${this.roomsAmount}
      People:
    `);

    const apartmentInfo = document.createElement('div');
    apartmentInfo.innerHTML = `
      <strong>Number:</strong> ${this.number} <br>
      <strong>Rooms:</strong> ${this.roomsAmount} <br>
      <strong>People:</strong>
    `;
    parentElement.appendChild(apartmentInfo);

    this.people.forEach(person => person.showInfo(apartmentInfo));
    parentElement.appendChild(document.createElement('hr'));
  }
}