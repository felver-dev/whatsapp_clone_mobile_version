import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./single-story.style";

const SingleStory = ({
  name,
  timeIndicator,
  icon,
  setting,
  displayStory,
  storyState,
  uri,
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
            {timeIndicator}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={setting}>{icon}</TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SingleStory;
