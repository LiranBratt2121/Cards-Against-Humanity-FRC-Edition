import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from 'react';

import generateRoomPassword from "./RoomUtils"
import CodeCopyButton from "../components/CodeCopyButton";

const CreateRoomScreen = () => {
  const [pressed, setPressed] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Room Screen</Text>

      <TouchableOpacity style={styles.button} onPress={() => setPressed(!pressed)}>
        <Text style={styles.buttonFont}>
          Generate Room Code
        </Text>
      </TouchableOpacity>

      <View style={styles.codeCopyBoxContainer}>
        {pressed && (
          <CodeCopyButton
            code={generateRoomPassword()}
          />
        )}
      </View>
    </View>
  );
};

export default CreateRoomScreen;