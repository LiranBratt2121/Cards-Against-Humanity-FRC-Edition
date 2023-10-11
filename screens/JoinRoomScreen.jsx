import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from 'react';

import RoomUtils from "../HandleRooms"

const JoinRoomScreen = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Room Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        onChangeText={(name) => setName(name)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Room Code"
        onChangeText={(text) => setCode(text)}
      />

      <TouchableOpacity style={styles.button}
        onPress={() => {
          {
            RoomUtils.updateRoomPlayerCount(code, name)
            navigation.navigate('GameRoom', { roomCode: code, playerName: name })
          }
        }}
      >
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinRoomScreen;