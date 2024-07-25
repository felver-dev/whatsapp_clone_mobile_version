import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { CallStory } from "../../components";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { FloatingButton } from "../../components";

const Calls = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={{ backgroundColor: "#18252D", height }}>
      <CallStory
        uri="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww"
        icon={<MaterialIcons name="videocam" size={28} color="#04AD9C" />}
        CallMissed={true}
        callNumber={2}
        timeIndicator="Yesterday, 10:55 am"
        name="Jules"
      />
      <CallStory
        uri="https://images.unsplash.com/photo-1525786210598-d527194d3e9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFuJTIwc21pbGV8ZW58MHx8MHx8fDA%3D"
        icon={<Ionicons name="call" size={24} color="#04AD9C" />}
        CallMissed={false}
        callNumber={3}
        timeIndicator="Yesterday, 10:55 am"
        name="Jules"
      />

      <FloatingButton
        icon={<MaterialIcons name="add-ic-call" size={24} color="#fff" />}
        bgColor="#04AD9C"
        width={65}
        height={65}
      />
    </View>
  );
};

export default Calls;
