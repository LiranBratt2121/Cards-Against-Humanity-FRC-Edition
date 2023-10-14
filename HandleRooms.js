import { ref, set, onValue, update, get, child } from "firebase/database";
import { db } from "../cards-against-frc/firebaseConfig";

class RoomUtils {
  static createRoom = (roomCode, users) => {
    set(ref(db, "Rooms/" + roomCode), {
      roomCode: roomCode,
      users: users,
    })
      .then(() => {
        alert(`Room ${roomCode} created successfully!`);
      })
      .catch((e) => {
        alert(e);
      });
  };

  static isRoomExists = async (roomId) => {
    const roomRef = ref(db, "Rooms/" + roomId);
    var roomData = {}

    onValue(roomRef, (snapshot) => {
      roomData = snapshot.val();

      return (roomData.roomCode !== undefined);
    });

    console.log(roomData.roomCode)
  };

  static updateRoomPlayerCount = (roomId, addedUser) => {
    const dbRef = ref(db);

    get(child(dbRef, `Rooms/${roomId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const users = snapshot.val()["users"];
          // console.log(users);
          console.log(users[0]['playerName'])          
          for (let i = 0; i < users.length; i++) {
            if (typeof users[i]['playerName'] === "number") {
              users[i]['playerName'] = addedUser;
              break;
            }
          }

          // console.log(users);

          update(ref(db, "Rooms/" + roomId), {
            users: users,
          })
            .then(() => {
              console.log(
                `User ${addedUser} added to the room ${roomId} successfully!`
              );
            })
            .catch((e) => {
              console.error("Error updating the room:", e);
            });
        } else {
          alert("Room does not exist!");
          console.log("Room does not exist!");
        }
      })
  };

  static notifyRoomUsers = (roomId, userName, message) => {
    const dbRef = ref(db);

    get(child(dbRef, `Rooms/${roomId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const roomData = snapshot.val();
        const messages = roomData.messages || [];

        messages.push({ user: userName, message });

        update(ref(db, `Rooms/${roomId}/messages`), messages)
          .then(() => {
            console.log(`Message added to the room ${roomId} successfully!`);
          })
          .catch((e) => {
            console.error("Error updating the messages:", e);
          });
      }
    });
  };
}

export default RoomUtils;
