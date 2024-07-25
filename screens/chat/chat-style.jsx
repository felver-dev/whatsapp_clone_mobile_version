import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#18252D",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default styles;
