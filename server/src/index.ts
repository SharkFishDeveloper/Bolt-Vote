import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });
io.on('connection', (socket) => {
  console.log('A user connected',socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected backend scokets');
  });

  socket.on("checkWorking",(data)=>{
    console.log("Reciedved data ",data);
  })
});


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
