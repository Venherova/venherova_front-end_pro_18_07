let createTableButton = document.getElementById('create-table');
let tableSection = document.getElementById('table-section');

function makeTable() {
  const existingTable = tableSection.querySelector('table');
  if (existingTable) {
    return;
  }

  const table = document.createElement('table');
  const count = 10;
  let number = 1;

  for(let i = 0; i < count; i++) {
    let tr = document.createElement('tr');

    for(let j = 0; j < count; j++) {
      let td = document.createElement('td');
      td.innerText = number++;

      tr.appendChild(td);
    }

    table.appendChild(tr);
    tableSection.appendChild(table);
  }

  table.style.display = 'table';
}

createTableButton.addEventListener('click', () => makeTable());


 

