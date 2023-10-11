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

    onValue(roomRef, (snapshot) => {
      const roomData = snapshot.val();

      console.log(roomData.roomCode !== undefined);
    });
  };

  static UpdateRoomPlayerCount = (roomId, addedUser) => {
    const dbRef = ref(db);

    get(child(dbRef, `Rooms/${roomId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const users = snapshot.val()["users"];
          console.log(users);

          for (let i = 0; i < users.length; i++) {
            if (typeof users[i] === "number") {
              users[i] = addedUser;
              break;
            }
          }

          console.log(users);

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
        }else{
          alert("Room does not exist!")
          console.log("Room does not exist!")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default RoomUtils;
