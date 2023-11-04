document.getElementById('show').addEventListener('click', () => {
  fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(result => {
      console.log(result);

      const parent = document.getElementById('users');
      parent.innerHTML = '';
      
      result.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        parent.appendChild(li);
      })
    })
});

document.getElementById('save').addEventListener('click', async () => {
  const userName = document.getElementById('newUser').value;

  const response = await fetch('http://localhost:3000/api/users/', {
    method: 'POST',
    body: JSON.stringify({ name: userName }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const data = await response.json(); 
    console.log('message:', data.message);
  } else {
    console.log('error form server:', response.statusText);
  }

  document.getElementById('newUser').value = '';
});
