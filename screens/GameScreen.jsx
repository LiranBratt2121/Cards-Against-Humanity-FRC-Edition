import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import RoomUtils from "../HandleRooms"

const GameScreen = ({ route }) => {
    const { roomCode, playerName } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Room</Text>
            <Text style={styles.secondaryTitle}>Room Number: {roomCode}</Text>
            <Text style={styles.secondaryTitle}>Player Name: {playerName}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        RoomUtils.updateDb(`Rooms/${roomCode}`, { alertAll: Math.random() })
                    }}
                >
                    <Text style={styles.buttonFont}>Click To notify Room members!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GameScreen;