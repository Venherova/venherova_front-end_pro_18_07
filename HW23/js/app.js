const API_BASE = 'https://swapi.dev/api'
const infoModal = new bootstrap.Modal('#infoModal')

function getData(type) {
  return axios.get(`${API_BASE}/${type}`)
    .then(result => {
      return result.data;
    });
}

function createList(item, fieldsToShow) {
  let li = document.createElement('li');
  let a = document.createElement('a');

  a.href = '#';
  a.textContent = item.name;

  li.addEventListener('click', (event) => {
    event.preventDefault();
    fetchDataByUrl(item.url, fieldsToShow);
  });

  li.appendChild(a);
  return li;
}

function fetchDataByUrl(url, fieldsToShow) {
  axios.get(url)
    .then(result => {
      showInfo(result.data, fieldsToShow)
    });
}

function showInfo(data, fieldsToShow) {
  const modalBody = document.getElementById('infoModalBody');
  
  let html = '';
  fieldsToShow.forEach(field => {
    if (data.hasOwnProperty(field)) {
      html += `<p>${field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')}: ${data[field]}</p>`;
    }
  });

  modalBody.innerHTML = html;
  infoModal.show();
}

function generateList(data, containerId, fieldsToShow, nextUrl) {
  let ul = document.createElement('ul');
  const array = [];

  for (const character of data) {
    array.push({ name: character.name, url: character.url });
  }

  for (let item of array) {
    ul.appendChild(createList(item, fieldsToShow));
  }
  document.getElementById(containerId).appendChild(ul);

  if (nextUrl) {
    let btn = document.createElement('button');
    btn.id = `more-${containerId}`;
    btn.innerHTML = 'Show more';
    btn.className = 'btn btn-show-more';
        
    document.getElementById(containerId.split('-').pop()).appendChild(btn);
    showMoreButton(containerId, nextUrl, fieldsToShow);
  }
}

function showMore(containerId, url, fieldsToShow) {
  axios.get(url)
    .then(result => {
      const array = [];

      for (const character of result.data.results) {
        array.push({name: character.name, url: character.url});
      }

      let ul = document.getElementById(containerId).querySelector('ul');
      
      for (let item of array) {
        ul.appendChild(createList(item, fieldsToShow));
      }

      document.getElementById(`more-${containerId}`).disabled = false;

      if (result.data.next) {  
        showMoreButton(containerId, result.data.next, fieldsToShow);
      } else {
        document.getElementById(`more-${containerId}`).remove();
      }
    });
}

function showMoreButton(containerId, next, fieldsToShow) {
  const moreButton = document.getElementById(`more-${containerId}`);
  moreButton.replaceWith(moreButton.cloneNode(true));

  document.getElementById(`more-${containerId}`).addEventListener('click', () => {
    document.getElementById(`more-${containerId}`).disabled = true
    showMore(containerId, next, fieldsToShow);
  });
}