import { Redirect, Stack, Tabs } from "expo-router";
import React from "react";
import { COLOR, icons } from "../../constants";
import { Loader } from "../../components/Loader";
import { View, Image, StyleSheet, StatusBar } from "react-native";
import { useGlobalContext } from "../../contexts/GlobalProvider";
import { LinearGradient } from "expo-linear-gradient";

const TabIcon = ({ icon, color, focused, iconColor, iconStyle }) => {
  return (
    <View style={iconStyle}>
      <Image
        style={styles.icon}
        source={focused ? iconColor : icon}
        resizeMode="contain"
        tintColor={color}
      />
    </View>
  );
};

export default function TabLayout() {
  const { loading, isLogged } = useGlobalContext();
  if (!loading && !isLogged) return <Redirect href="/sign-in" />;
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: COLOR.primary,
          tabBarInactiveTintColor: COLOR.textPrimary,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: COLOR.bg,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 84,
            elevation: 8,
            position: "absolute",
            bottom: -3,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                focused={focused}
                iconColor={icons.homeColor}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="mess"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.mess}
                iconColor={icons.messColor}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="post"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <LinearGradient
                colors={["#F68464", "#EEA849"]}
                style={{
                  borderTopRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  position: "absolute",
                  top: -20,
                  transform: [{ rotate: "-45deg" }],
                  elevation: 4,
                }}
              >
                <TabIcon
                  icon={icons.add}
                  iconColor={icons.add}
                  color={COLOR.bg}
                  iconStyle={{
                    width: 65,
                    height: 65,
                    justifyContent: "center",
                    alignItems: "center",
                    transform: [{ rotate: "45deg" }],
                  }}
                />
              </LinearGradient>
            ),
          }}
        />
        <Tabs.Screen
          name="like"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.heart}
                iconColor={icons.heartColor1}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.user}
                iconColor={icons.userColor}
                focused={focused}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
      {loading ? <Loader /> : ""}
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
