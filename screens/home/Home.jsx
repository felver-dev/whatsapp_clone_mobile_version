import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderLeft } from "../../components";

const Home = () => {
  // const navigation = useNavigation();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => <Text>Jules</Text>,
  //   });
  // }, []);


  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          borderBottomColor: "#9DA5AC",
        }}
      >
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
