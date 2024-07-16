import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR, images } from "../../constants";

const user = [
  { id: 1, image: images.user1 },
  { id: 2, image: images.user2 },
  { id: 3, image: images.user3 },
];

export default function home() {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#E7E7E7", height: "100%" }}>
        <View style={styles.hearder}>
          <Text style={styles.hearderTitle}>TimeLine</Text>
          <Text style={styles.hearderText}>Freind</Text>
          <FlatList
            data={user}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <Image style={styles.hearderImage} source={item.image} />
            )}
          />
        </View>
        <ScrollView>
          <View style={styles.container}></View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor={COLOR.secondary} style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height * 2,
  },
  hearder: {
    width: "100%",
    backgroundColor: COLOR.secondary,
    minHeight: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 10,
    // position: "absolute",
  },
  listContainer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  hearderImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    borderRadius: 40,
    marginRight: 30,
  },
  hearderTitle: {
    fontSize: 25,
    margin: 10,
  },
});
