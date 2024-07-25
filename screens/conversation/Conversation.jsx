import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FontAwesome5,
  Entypo,
  Ionicons,
  Octicons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import { FloatingButton } from "../../components";
import { StatusBar } from "expo-status-bar";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const Conversation = () => {
  const [messageSend, setMessageSend] = useState("");
  const [messageToSend, setMessageToSend] = useState("");
  const [charNumber, setCharNumber] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();
  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return <Text> </Text>;
      },
      headerRight: () => {
        return <Text> </Text>;
      },
    });
  }, []);

  const onChange = (message) => {
    setMessageSend(message);
    setCharNumber(message.length + 1);
  };

  const sendMessage = () => {
    setMessageToSend(messageSend);
    setMessageSend('')
  };

  useEffect(() => {
    console.log(params.data);
  }, []);
  return (
    <View>
      <StatusBar style="light" />
      <ImageBackground
        style={styles.bgPicture}
        resizeMode="cover"
        source={require("../../assets/bg.jpg")}
      />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Image
            style={styles.contactPicture}
            source={{
              uri: "https://images.unsplash.com/photo-1720599411841-48f304e7ee7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
          <Text
            style={{
              color: "#ffffff",
              fontFamily: "bold",
              fontSize: 21,
            }}
          >
            Jane Doe
          </Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Ionicons name="videocam" size={26} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call-sharp" size={22} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {messageToSend === "" ? (
        ""
      ) : (
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 100,
            right: 20,
            backgroundColor: "#054640",
            padding: 20,
            borderRadius:5
          }}
        >
          <Text style={{ color: "#fff", width: 200 }}> {messageToSend} </Text>
        </TouchableOpacity>
      )}

      <View
        style={styles.textArea(
          charNumber <= 22 ? height - height * 0.2 : height - height * 0.22,
          charNumber >= 22 ? 80 : 60,
          messageSend === "" ? 20 : 20
        )}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity>
              <Octicons
                style={{ marginRight: 20 }}
                name="smiley"
                size={25}
                color="#9DA5AC"
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.textInput(messageSend === "" ? "55%" : width * 0.5)}
            placeholder="Type a message"
            placeholderTextColor="#707980"
            cursorColor="#707980"
            selectionColor="#707980"
            autoComplete={true}
            multiline={true}
            scrollEnabled={true}
            textAlign="left"
            value={messageSend}
            onChangeText={onChange}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 30,
            }}
          >
            <TouchableOpacity>
              <Feather name="paperclip" size={24} color="#9DA5AC" />
            </TouchableOpacity>
            {!messageSend && (
              <TouchableOpacity>
                <Entypo name="camera" size={24} color="#9DA5AC" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      {messageSend === "" ? (
        <FloatingButton
          top={height - height * 0.2}
          width={60}
          height={60}
          icon={<FontAwesome name="microphone" size={24} color="#fff" />}
        />
      ) : (
        <FloatingButton
          press={() => sendMessage()}
          top={height - height * 0.2}
          width={60}
          height={60}
          icon={<FontAwesome name="send" size={24} color="#fff" />}
        />
      )}
    </View>
  );
};

export default Conversation;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#232D36",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    paddingHorizontal: 12,
  },

  bgPicture: {
    flex: 1,
    justifyContent: "center",
    height,
  },
  headerLeft: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  contactPicture: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  headerRight: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  textArea: (top, heightTextInput, borderRadius) => ({
    position: "absolute",

    top: top,
    backgroundColor: "#232D36",
    marginHorizontal: 10,
    paddingHorizontal: 20,
    width: width - 0.25 * width,

    height: heightTextInput,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: borderRadius,
  }),
  textInput: (textInputWidth) => ({
    width: textInputWidth,
    fontFamily: "regular",
    fontSize: 16,
    color: "#fff",
    marginRight: 10,
    paddingBottom: 5,
  }),
});
