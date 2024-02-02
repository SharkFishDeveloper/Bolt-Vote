export type RoomId = number;

type Room = {
  userId: string[];
  roomId: RoomId;
  question: string;
  options: string[];
  postedBy: string;
};

export class RoomManager {
  private roomManager: Room[] = [];

  createRoom(roomId: RoomId, author: string, options: string[], question: string): Room {
    let room: Room = {
      userId: [],
      roomId: roomId,
      question: question,
      options: options,
      postedBy: author,
    };
    this.roomManager.push(room);
    return room;
  }

  joinRoom(roomId: RoomId, userId: string): Room | null {
    let room = this.roomManager.find((room) => room.roomId == roomId);
    if (room) {
      room.userId.push(userId);
      return room;
    } else {
      console.log(`Oops no room exists with id ${roomId}`);
      return null;
    }
  }

  removeUser(roomId: RoomId, userId: string): Room | null {
    let room = this.roomManager.find((room) => room.roomId == roomId);
    if (room) {
      room.userId.splice(room.userId.indexOf(userId), 1);
      console.log(`Removed user ${roomId}`);
      return room;
    } else {
      console.log(`Oops no room exists with id ${roomId}`);
      return null;
    }
  }

  getRoom(roomId: RoomId): Room | null {
    let room = this.roomManager.find((room) => room.roomId == roomId);
    if (room) {
      console.log("Room,Question info - >", room.question);
      console.log("Room,Question info - >", room.options);
      return room;
    } else {
      console.log(`Oops no room exists with id ${roomId}`);
      return null;
    }
  }

  changeQuestion(roomId: RoomId, question: string, newOptions: string[]): void {
    let room = this.roomManager.find((room) => room.roomId === roomId);
    if (room) {
      console.log("Question changes successfully !!");
      room.question = question;
      if (!newOptions) {
        console.log("No options, so only the question will change !!");
      }
      // else if (room.options == newOptions) {
      //   return null;
      // }
      else {
        room.options = newOptions;
        console.log("Options changes successfully !!");
      }
    } else {
      console.log(`Oops no room exists with id ${roomId}`);
    }
  }

  deleteRoom(roomId: RoomId): void {
    let index = this.roomManager.findIndex((room) => room.roomId === roomId);
    if (index !== -1) {
      this.roomManager.splice(index, 1);
      console.log("Room deleted successfully !!");
    } else {
      console.log(`Oops no room exists with id ${roomId}`);
    }
  }
}

console.log("Starting");

// Create an instance of RoomManager
const roomManager = new RoomManager();



