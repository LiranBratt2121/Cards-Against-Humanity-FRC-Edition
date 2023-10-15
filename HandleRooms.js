import { ref, set, onValue, get, child, update } from "firebase/database";
import { db } from "../cards-against-frc/firebaseConfig";

class RoomUtils {
  static createRoom = (roomCode, users) => {
    set(ref(db, "Rooms/" + roomCode), {
      roomCode: roomCode,
      users: users,
      alertAll: 'NaN'
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

    onValue(roomRef, (snapshot) => {
      const roomData = snapshot.val();

      if (roomData && roomData.roomCode !== undefined) {
        console.log(roomData.roomCode);
        return true;
      } else {
        return false;
      }
    });
  };

  static updateRoomPlayerCount = (roomId, addedUser) => {
    const dbRef = ref(db);

    get(child(dbRef, `Rooms/${roomId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const users = snapshot.val()["users"];

        for (let i = 0; i < users.length; i++) {
          // May change to array.find method for optimization later
          if (typeof users[i]["playerName"] === "number") {
            users[i]["playerName"] = addedUser;
            break;
          }
        }

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
    });
  };

  static alertCheck = (roomId) => {
    const dbRef = ref(db, `Rooms/${roomId}/alertAll`);
    
    onValue(dbRef, (_) => {
      console.log(`Notified All!`)
    });

  };

  static newPlayerAlert = (roomId) => {
    const dbRef = ref(db, `Rooms/${roomId}/users`);
    
    onValue(dbRef, (snapshot) => {
      
    })
  }

  static updateDb = (href, content) => {
    update(ref(db, href), content);
  }
}

export default RoomUtils;
