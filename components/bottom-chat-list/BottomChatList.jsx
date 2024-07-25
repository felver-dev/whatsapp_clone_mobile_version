import { View, Text } from "react-native";
import React from "react";
import styles from "../single-chat/single-chat-style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomChatList = () => {
  return (
    <View style={styles.bottomTextContainer}>
      <MaterialCommunityIcons
        style={{ marginTop: 20 }}
        name="lock"
        size={15}
        color="#9DA5AC"
      />
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text style={{ color: "#9DA5AC", fontFamily: "regular", fontSize: 14 }}>
          Vos messages personnels sont{" "}
        </Text>
        <Text style={{ color: "#00CA54", fontFamily: "regular", fontSize: 14 }}>
          chiffrés de bout en bout
        </Text>
      </View>
    </View>
  );
};

export default BottomChatList;
