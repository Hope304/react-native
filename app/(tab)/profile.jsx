import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function profile() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
