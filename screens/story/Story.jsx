import {
  View,
  Text,
  useWindowDimensions,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FloatingButton, SingleStory } from "../../components";
import { MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";
import axios from "axios";

const Story = () => {
  const { height } = useWindowDimensions();
  const [storiesList, setStoriesList] = useState([]);
  const screenHeight = Dimensions.get("screen").height;
  const HeightForFloatingButton = screenHeight - screenHeight * 0.37;

  const getStoriesList = () => {
    axios.get("https://freetestapi.com/api/v1/users").then((res) => {
      setStoriesList(res.data);
    });
  };

  useEffect(() => {
    getStoriesList();
  }, []);

  const renderStories = (item) => {
    return (
      <SingleStory
        name={item.name}
        timeIndicator="30 min ago"
        uri="https://plus.unsplash.com/premium_photo-1680184593201-f9cd6b4627be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww"
      />
    );
  };

  return (
    <View style={{ backgroundColor: "#18252D", height }}>
      <SingleStory
        uri="https://plus.unsplash.com/premium_photo-1680184593201-f9cd6b4627be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww"
        name="My Status"
        timeIndicator="Yesterday, 10:55"
        storyState="#E3E8EE"
        setting={() => console.log("Jules")}
        displayStory={() => console.log("Felver")}
        icon={
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={28}
            color="#A3AEB4"
          />
        }
      />
      <View>
        <Text
          style={{
            color: "#9DA5AC",
            marginHorizontal: 20,
            fontSize: 15.54,
            fontFamily: "bold",
          }}
        >
          Recent Updates
        </Text>

        <FlatList
          data={storiesList.slice(0, 2)}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => renderStories(item)}
        />
      </View>
      <View>
        <Text
          style={{
            color: "#9DA5AC",
            marginHorizontal: 20,
            fontSize: 15.54,
            fontFamily: "bold",
          }}
        >
          Viewed Updates
        </Text>
        <FlatList
          data={storiesList.slice(1, 7)}
          renderItem={({ item }) => renderStories(item)}
          ListFooterComponent={() => {
            return (
              <View style={{ height: 200, backgroundColor: "" }}></View>
            );
          }}
        />
      </View>

      <FloatingButton
        top={HeightForFloatingButton}
        width={45}
        height={45}
        bgColor="#313C42"
        icon={<Entypo name="pencil" size={24} color="#fff" />}
      />

      <FloatingButton
        width={65}
        height={65}
        bgColor="#04AD9C"
        icon={<AntDesign name="camera" size={28} color="#fff" />}
      />
    </View>
  );
};

export default Story;
