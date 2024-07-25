import { View, TouchableOpacity, SafeAreaView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HeaderRight = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          gap: 18,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity>
          <FontAwesome5 name="search" size={16} color="#9DA5AC" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={20}
            color="#9DA5AC"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HeaderRight;
