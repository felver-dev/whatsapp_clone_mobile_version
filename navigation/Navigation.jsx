import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Chat, Calls, Story, Camera, Home, Conversation } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderLeft, HeaderRight } from "../components";
import { Entypo } from "@expo/vector-icons";

// Topbar Navigation
const Topbar = createMaterialTopTabNavigator();
const HomeStack = createNativeStackNavigator();

const screenOptions = {
  tabBarIndicatorStyle: {
    height: 2,
    backgroundColor: "#0CA996",
    borderRadius: 8,
  },
  tabBarLabelStyle: {
    fontFamily: "bold",
    fontSize: 14.54,
  },
  tabBarStyle: {
    backgroundColor: "#232D36",
    borderTopWidth: 0.3,
    borderTopColor: "#868F94",
    height: 70,
    justifyContent: "center",
  },
  tabBarInactiveTintColor: "#9DA5AC",
  tabBarActiveTintColor: "#0CA996",
  tabBarPressColor: "#232D36",
};

const TopBarGroup = () => {
  return (
    <Topbar.Navigator screenOptions={screenOptions}>
      <Topbar.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Entypo
                name="camera"
                size={20}
                color={focused ? "#0CA996" : "#9DA5AC"}
              />
            );
          },
          tabBarShowLabel: false,
        }}
      />
      <Topbar.Screen name="Chat" component={Chat} />
      <Topbar.Screen name="Story" component={Story} />
      <Topbar.Screen name="Calls" component={Calls} />
    </Topbar.Navigator>
  );
};

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitle: "",
        // headerStyle: {
        //   backgroundColor: "#232D36",
        // },
        headerLargeStyle: {
          backgroundColor: "#232D36",
        },
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
      }}
    >
      <HomeStack.Screen name="Top" component={TopBarGroup} />
      <HomeStack.Screen
        name="Conversation"
        component={Conversation}
        // options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <HomeStackGroup />
    </NavigationContainer>
  );
};

export default Navigation;
