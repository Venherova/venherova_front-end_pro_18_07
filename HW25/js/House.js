class House {
  /**
   * @param {string} address 
   * @param {number} floors 
   * @param {Appartment []} appartments 
   */
  constructor(address, floors, appartments) {
    this.address = address;
    this.floors = floors;
    this.appartments = appartments;
  }

  showInfo() {
    console.log(`
      Address: ${this.address}
      Floors: ${this.floors}
      Appartments:
    `);

    const output = document.getElementById('output');
    const houseInfo = document.createElement('div');
    houseInfo.innerHTML = `
      <h4>House Information</h4>
      <strong>Address:</strong> ${this.address} <br>
      <strong>Floors:</strong> ${this.floors} <br>
      <strong>Appartments:</strong>
    `;
    output.appendChild(houseInfo);

    this.appartments.forEach(app => app.showInfo(houseInfo));
  }
}