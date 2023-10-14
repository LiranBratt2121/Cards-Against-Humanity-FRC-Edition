import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import * as Clipboard from 'expo-clipboard';
import RoomUtils from "../HandleRooms"
import generatePlayers from "./ComponentsUtils";

const CodeCopyButton = ({ code }) => {
    return (
        <View>
            <Text style={styles.codeText}>{code}</Text>
            <TouchableOpacity style={styles.copyButton} onPress={async () => {
                alert("Copied code to clipboard");
                await Clipboard.setStringAsync(code)
                RoomUtils.createRoom(code, generatePlayers())
            }}>
                <Text>Copy</Text>

            </TouchableOpacity>
        </View>
    )
}

export default CodeCopyButton;
