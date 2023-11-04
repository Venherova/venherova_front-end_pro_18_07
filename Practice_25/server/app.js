
import express, { request, response } from 'express';
import bodyParser from 'body-parser';
import { users } from './data.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

const PORT = 3000;
app.listen(PORT, () => {
  console.log('We live on: ' + PORT);
});

app.get('/api/users', (request, response) => {
  console.log(request.url);
  response.send(users);
});

app.get('/api/users/:id', (request, response) => {
  // console.log(request.params.id);

  const myUser = users.find(user => user.id == request.params.id);
  if(!myUser) {
    response.send('Not found');
  } else {
    response.send(myUser);
  }
});

app.post('/api/users', (request, response) => {
  const name = request.body.name && request.body.name.trim();

  if (!name) {
    response.status(400).json({message: 'No Content'});
    return;
  }

  users.push({id: users.length + 1, name});
  response.status(200).json({message: 'User has been created'});
});




















// import http from 'http';
// import { users } from './data.js';

// const PORT = 3000;

// const server = http.createServer(function(request, response) {


//   if(request.url === '/api/users' && request.method === 'GET') {
//     response.end(JSON.stringify(users));
//   }else{
//     console.log('URL of your page:' + request.url);
//     response.writeHead(200, { 'Hillel': 'lesson25'});
//     response.end('It works fine');
//   }
// });

// server.listen(PORT);

// console.log('We are listening port' + PORT);

