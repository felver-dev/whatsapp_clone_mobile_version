import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  container: {
    width,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: "#18252D",
    paddingHorizontal:20,
    height:80
  },

  pictureStyle: (color) => ({
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2.5,
    borderColor: color,
  }),
});

export default styles;
