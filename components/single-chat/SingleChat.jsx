import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./single-chat-style";
import { useEffect, useState } from "react";
import axios from "axios";
import BottomChatList from "../bottom-chat-list/BottomChatList";

const SingleChat = ({ onPress }) => {
  const [contact, setContact] = useState([]);

  const getUserContact = () => {
    axios.get("https://freetestapi.com/api/v1/users").then((res) => {
      setContact(res.data);
    });
  };
  useEffect(() => {
    getUserContact();
  }, []);

  const renderItem = (item) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.pictureContainerStyle}>
          <TouchableOpacity>
            <Image
              style={styles.pictureStyle}
              source={{
                uri: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFmcmljYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
              }}
            />
          </TouchableOpacity>
          <Text style={styles.nameStyle}> {item.name} </Text>
        </View>
        <Text style={styles.timeStyle}> 3.14 pm </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        style={styles.flatListStyle}
        keyExtractor={(item) => {
          return item.id;
        }}
        data={contact}
        renderItem={({ item }) => renderItem(item)}
        showsVerticalScrollIndicator={true}
        ListFooterComponent={() => <BottomChatList />}
      />
    </View>
  );
};

export default SingleChat;
