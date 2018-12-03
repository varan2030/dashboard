const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

const server =  http.Server(app);
server.listen(3000, () => {
  console.log('localhost:3000')
});

const io = socketIo(server);

// Socket connection
io.on('connection', (socket) => {
  console.log('user connected');

let status = ['Critical', 'Major', 'OK'];
let app = ['App1', 'App2', 'App3', 'App4', 'App5'];
let data = [];
let randomT = false;
for (let i = 0; i < 3; i++) {
  data.push({
    name: app[Math.floor(Math.random() * app.length)],
    status: status[Math.floor(Math.random() * status.length)]
  });
}
//Create and send random App and AppStatus data 
socket.on('appStatus', () => {
  console.log("appStatus");
 randomT = false;
socket.emit('appStatus', data);
});

function getDateTime() {

  let date = new Date();

  let hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  let min = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  let sec = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  return hour + ":" + min + ":" + sec;
}


socket.on('random', () => {
   console.log("random");
 randomT = true;
 getRandom();
})

function getRandom() {
  if (randomT) {  
  setTimeout(getRandom, 1000, 'update');
  io.emit('random', {
    random: Math.floor(Math.random() * 70 + 30),
    timer: getDateTime()
  });
}
}

socket.on('cpu', () => {
  io.emit('cpu', os.cpus())
})

socket.on('disconnect', function () {
  randomT = false;
  console.log('user disconnected')
});

})