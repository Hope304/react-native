import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR, icons, images } from "../../constants";

const user = [
  { id: 1, image: images.user1 },
  { id: 2, image: images.user2 },
  { id: 3, image: images.user3 },
  { id: 4, image: images.user3 },
  { id: 5, image: images.user3 },
];

const post = [
  {
    id: 1,
    userName: "hunn",
    imageUser: images.user1,
    title: "First Day",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: images.post,
    like: 20,
    comment: [
      {
        user: "liin",
        cmt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
    ],
    time: 24,
  },
  {
    id: 2,
    userName: "hunn",
    imageUser: images.user1,
    title: "First Day",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: images.post,
    like: 20,
    comment: [
      {
        user: "liin",
        cmt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
    ],
    time: 24,
  },
  {
    id: 3,
    userName: "hunn",
    imageUser: images.user1,
    title: "First Day",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: images.post,
    like: 20,
    comment: [
      {
        user: "liin",
        cmt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
    ],
    time: 24,
  },
];

export default function home() {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#E7E7E7", height: "100%" }}>
        <View>
          <View style={styles.hearder}>
            <View style={styles.hearderTitle}>
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: "Poppins-SemiBold",
                  color: COLOR.textPrimary,
                }}
              >
                TimeLine
              </Text>
              <Text style={{ fontSize: 18, fontFamily: "Poppins-Regular" }}>
                Freind
              </Text>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={user}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContainer}
              renderItem={({ item }) => (
                <View style={styles.hearderImage}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.container}>
          <FlatList
            data={post}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              gap: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
            renderItem={({ item }) => (
              <View style={styles.postContainer}>
                <View style={styles.user}>
                  <Image style={styles.userImage} source={item.imageUser} />
                  <Text style={styles.usertext}>{item.userName}</Text>
                </View>
                <View style={styles.content}>
                  <Text style={styles.titleContent}>{item.title}</Text>
                  <View>
                    <Text
                      style={styles.mainContent}
                      numberOfLines={!showMore ? 2 : undefined}
                    >
                      {item.content}
                    </Text>
                    <Pressable onPress={handleShowMore}>
                      <Text style={{ color: COLOR.textSecond, fontSize: 13 }}>
                        Show more
                      </Text>
                    </Pressable>
                  </View>
                  <Image style={styles.imageContent} source={item.image} />
                </View>
                <View style={styles.footerPost}>
                  <View style={styles.sosial}>
                    <Pressable style={styles.sosialItem}>
                      <Image style={styles.iconSosial} source={icons.heart} />
                      <Text style={styles.textSosial}>{item.like}</Text>
                    </Pressable>
                    <Pressable style={styles.sosialItem}>
                      <Image style={styles.iconSosial} source={icons.comment} />
                      <Text style={styles.textSosial}>
                        {item.comment.length}
                      </Text>
                    </Pressable>
                  </View>
                  <Text>{item.time} minutes</Text>
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  hearder: {
    width: "100%",
    backgroundColor: COLOR.secondary,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 10,
    overflow: "hidden",
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderColor: COLOR.textSecond,
  },
  listContainer: {
    gap: 20,
    paddingHorizontal: 20,
  },
  hearderImage: {
    width: 70,
    height: 70,
    padding: 3,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 40,
    borderColor: COLOR.primary,
    borderWidth: 3,
  },
  hearderTitle: {
    flexDirection: "column",
    margin: 20,
    gap: 4,
  },
  postContainer: {
    width: 340,
    minHeight: 500,
    backgroundColor: COLOR.bg,
    padding: 20,
    borderRadius: 20,
    flexDirection: "column",
    gap: 10,
    elevation: 5,
    // justifyContent: "center",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  userImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  usertext: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
  },
  content: {
    width: "100%",
    gap: 6,
  },
  imageContent: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  footerPost: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  sosial: {
    flexDirection: "row",
    gap: 10,
  },
  iconSosial: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  sosialItem: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  textSosial: {
    fontSize: 15,
    fontFamily: "Poppins-SemiBold",
    color: COLOR.textPrimary,
  },
});
