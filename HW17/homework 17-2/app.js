let link = "";
let getLink = document.getElementById('get-link');
let openLink = document.getElementById('open-link');

getLink.addEventListener('click', () => {
  const userLink = prompt('Enter the link');

  if (userLink) {
    if (userLink.startsWith('http://') || userLink.startsWith('https://')) {
        link = userLink;
    } else {
        link = "https://" + userLink;
    }
    openLink.disabled = false;
    openLink.innerText = `Go to: ${link}`
  }
});

openLink.addEventListener('click', () => {
  if (link) {
    window.open(link, '_blank')
  } else {
    alert('The link was not established');
  }
});



