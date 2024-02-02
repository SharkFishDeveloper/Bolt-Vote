import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { RoomManager } from './manager/UserManager';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

const roomManager = new RoomManager();

// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });

io.on('connection', (socket) => {

  console.log('A user connected',socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected backend scokets');
  });

  socket.on("Createroom",(data)=>{
    const {roomId,question,options,postedBy} = data;

    roomManager.createRoom(roomId,question,options,postedBy);
    
    socket.join(roomId);
    socket.emit("roomCreated",{success:true,"Successfully created room " :roomId})
    console.log("Reciedved data ",data);
    console.log(roomManager.getRoom(roomId));
    })
});


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
