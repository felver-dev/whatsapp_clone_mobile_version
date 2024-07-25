import { View, Text, SafeAreaView } from "react-native";
import styles from "./header.style";

const HeaderLeft = () => {
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            fontFamilly: "bold",
            fontSize: 20,
            color: "#9DA5AC",
          }}
        >
          Whatsapp 
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HeaderLeft;
