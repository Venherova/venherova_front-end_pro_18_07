const myModal = new bootstrap.Modal('#staticBackdrop')

const openModalBtn = document.getElementById('openModalBtn')
openModalBtn.addEventListener('click', () => {
  myModal.show();
});


const tooltipTriggers = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggers.forEach(tooltip => new bootstrap.Tooltip(tooltip));



const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
let alertVisible = false;

const appendAlert = (parentElement, message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '</div>'
  ].join('')

  parentElement.append(wrapper)
}

const alertTrigger = document.getElementById('showAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    if (!alertVisible) {
      appendAlert(alertPlaceholder, 'Nice, you triggered this alert message!', 'success');
      alertVisible = true;
    } else {
      const currentAlert = alertPlaceholder.querySelector('.alert');
      if (currentAlert) {
        removeElement('.alert')
      }
      alertVisible = false;
    }
  })
}



