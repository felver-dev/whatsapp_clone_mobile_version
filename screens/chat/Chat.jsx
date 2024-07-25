import { View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SingleChat, FloatingButton } from "../../components";
import styles from "./chat-style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Chat = () => {
  const { navigate } = useNavigation();
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const getContacts = () => {
    axios.get("https://freetestapi.com/api/v1/users").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getContacts();
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* <SingleChat onPress={() => navigate("Conversation", { Conversation })} /> */}
      <SingleChat onPress={() => navigate("Conversation", { data: data })} />
      <FloatingButton
        width={65}
        height={65}
        icon={
          <MaterialCommunityIcons
            name="message-reply-text"
            size={24}
            color="#FFFFFD"
          />
        }
      />
    </View>
  );
};

export default Chat;
