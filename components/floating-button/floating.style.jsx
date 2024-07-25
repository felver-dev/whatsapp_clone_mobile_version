import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
  floatingBouton: (width, height, bgColor, top) => ({
    position: "absolute",
    right: 25,
    top: top,
    backgroundColor: bgColor,
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    zIndex:999,
  }),
});

export default styles;
