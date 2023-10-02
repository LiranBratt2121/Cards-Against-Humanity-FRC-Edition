import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import styles from "./styles";

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cards Against Humanity</Text>
        <Text style={styles.secondaryTitle}>Cards  Against Humanity</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreateRoom')}
          >
            <Text style={styles.buttonFont}>Create Room</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('JoinRoom')}
          >
            <Text style={styles.buttonFont}>Join Room</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default HomeScreen;