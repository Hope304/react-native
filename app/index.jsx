import React, { useEffect } from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR, images } from "../constants";
import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../contexts/GlobalProvider";

export default function index() {
  const { loading, isLogged } = useGlobalContext();
  useEffect(() => {
    if (!loading && isLogged) router.replace("/home");
  });
  if (!loading && isLogged) return <Redirect href="/home" />;
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
          {loading ? (
            <Loader />
          ) : (
            <View style={styles.buttons}>
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
          )}
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
  buttons: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: 20,
  },
});
