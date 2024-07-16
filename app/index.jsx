import React from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR, images } from "../constants";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

export default function index() {
  return (
    <SafeAreaView style={{ backgroundColor: COLOR.bg, height: "100%" }}>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={images.loginScreen}></Image>
          <View style={{ maxWidth: 266 }}>
            <Text style={styles.text}>Let’s Connect Together</Text>
          </View>
          <CustomButton
            title="Login"
            containerStyles={{ width: "100%", marginTop: 40 }}
            handlePress={() => router.push("/sign-in")}
          />
          <CustomButton
            title="Sign up"
            containerStyles={{
              width: "100%",
              marginTop: 20,
              backgroundColor: COLOR.primary,
            }}
            textStyles={{ color: "#ffffff" }}
            handlePress={() => router.push("/sign-up")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: 20,
  },
  image: {
    maxWidth: 300,
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  text: {
    marginTop: 30,
    fontSize: 36,
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
  },
});
