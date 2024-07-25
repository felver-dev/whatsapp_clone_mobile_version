import { TouchableOpacity, Dimensions } from "react-native";
import styles from "./floating.style";

const FloatingButton = ({ icon, bgColor, height, width, press, top }) => {
  const screenHeight = Dimensions.get("screen").height;
  const HeightForFloatingButton = screenHeight - screenHeight * 0.31;
  return (
    <TouchableOpacity
      onPress={press}
      style={styles.floatingBouton(
        width,
        height,
        bgColor ?? "#04AD9C",
        top ?? HeightForFloatingButton
      )}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default FloatingButton;
