import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from 'react';

const JoinRoomScreen = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Room Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Room Code"
        onChangeText={(text) => setText(text)} 
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinRoomScreen;