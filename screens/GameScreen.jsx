import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const GameScreen = ({ roomCode }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Room</Text>
            <Text style={styles.secondaryTitle}>Room Numbers: {roomCode}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonFont}>Click To notify Room members!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GameScreen;