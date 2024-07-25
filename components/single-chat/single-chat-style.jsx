import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  mainContainer: {
    height,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flatListStyle: {
    height: height * 4.02,
  },

  bottomTextContainer: {
    height: 300,
    paddingHorizontal: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },

  container: {
    backgroundColor: "#18252D",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomColor: "#D3DAE0",
    borderBottomWidth: 0.3,
  },
  pictureContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  pictureStyle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    objectFit: "cover",
    resizeMode: "contain",
  },

  nameStyle: {
    fontSize: 18,
    color: "#D3DAE0",
  },
  timeStyle: {
    fontSize: 12,
    color: "#868F94",
    fontWeight: "bold",
  },
});

export default styles;
