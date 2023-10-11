import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import * as Clipboard from 'expo-clipboard';
import RoomUtils from "../HandleRooms"


const CodeCopyButton = ({ code }) => {
    return (
        <View>
            <Text style={styles.codeText}>{code}</Text>
            <TouchableOpacity style={styles.copyButton} onPress={async () => {
                alert("Copied code to clipboard");
                await Clipboard.setStringAsync(code)
                RoomUtils.createRoom(code, [1, 2, 3, 4, 5, 6, 7, 8])
            }}>
                <Text>Copy</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CodeCopyButton;
