import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./single-story.style";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";


const CallStory = ({
  name,
  timeIndicator,
  icon,
  setting,
  displayStory,
  storyState,
  uri,
  callNumber,
  CallMissed,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={displayStory}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image
          style={styles.pictureStyle(storyState ?? "#00CA54")}
          source={{
            uri: uri,
          }}
        />
        <View>
          <Text
            style={{ color: "#E3E8EE", fontSize: "18.54", fontFamily: "bold" }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: "#98A3A9",
              fontSize: "14.54",
              fontFamily: "regular",
            }}
          >
            {CallMissed ? (
              <Feather name="arrow-down-right" size={24} color="#DF788B" />
            ) : (
              <Feather name="arrow-up-right" size={24} color="#17B49F" />
            )}{" "}
            {callNumber == 1 ? "" : "(" + callNumber + ")"} {timeIndicator}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={setting}>{icon}</TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CallStory;
