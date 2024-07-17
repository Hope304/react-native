import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { COLOR, icons, images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../../components/CustomButton";

const data = {
  image: images.user2,
  name: "hunn",
  follower: 24,
  following: 7,
  posts: [
    { idPost: 1, imagePost: images.post },
    { idPost: 2, imagePost: images.post },
    { idPost: 3, imagePost: images.post },
    { idPost: 4, imagePost: images.post },
    { idPost: 5, imagePost: images.post },
    { idPost: 6, imagePost: images.post },
    { idPost: 7, imagePost: images.post },
    { idPost: 8, imagePost: images.post },
    { idPost: 9, imagePost: images.post },
    { idPost: 10, imagePost: images.post },
    { idPost: 11, imagePost: images.post },
    { idPost: 12, imagePost: images.post },
    { idPost: 13, imagePost: images.post },
    { idPost: 15, imagePost: images.post },
    { idPost: 14, imagePost: images.post },
    { idPost: 16, imagePost: images.post },
  ],
};

numColumns = 3;
const windowWidth = Dimensions.get("window").width;
const itemMargin = 8;
const itemSize =
  (windowWidth - itemMargin * (numColumns + 1) - 40) / numColumns;
export default function profile() {
  const [visible, setVisibale] = useState(true);
  const toggleDropdown = () => {
    // setVisibale(!visible);
  };
  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={{ position: "absolute", zIndex: 4 }}>
          <Image source={icons.pen} />
          <Image source={icons.logout} />
        </View>
      );
    }
  };
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: COLOR.bg,
          height: "100%",
          alignItems: "center",
        }}
      >
        <View>
          <View style={styles.containHeader}>
            <Image style={styles.imageUser} source={data.image} />
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{data.name}</Text>
                <TouchableOpacity onPress={toggleDropdown}>
                  <Image source={icons.setting} />
                  {renderDropdown()}
                </TouchableOpacity>
              </View>
              <View style={styles.sosial}>
                <View style={styles.sosialItem}>
                  <Text>{data.follower}</Text>
                  <Text>Followers</Text>
                </View>
                <View style={styles.sosialItem}>
                  <Text>{data.following}</Text>
                  <Text>Following</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <LinearGradient
              colors={["#F68464", "#EEA849"]}
              style={{ borderRadius: 30, marginTop: 20, flex: 1 }}
            >
              <CustomButton
                title="Follow"
                containerStyles={{ borderWidth: 0 }}
                textStyles={{ color: COLOR.bg }}
              />
            </LinearGradient>
            <LinearGradient
              colors={["#F68464", "#EEA849"]}
              style={{ borderRadius: 30, marginTop: 20, flex: 1 }}
            >
              <CustomButton
                title="Message"
                containerStyles={{ borderWidth: 0 }}
                textStyles={{ color: COLOR.bg }}
              />
            </LinearGradient>
          </View>
          <View style={styles.post}>
            <FlatList
              data={data.posts}
              keyExtractor={(item) => item.idPost}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                  <Image
                    style={{
                      width: itemSize,
                      height: itemSize,
                      borderRadius: 20,
                      margin: 4,
                    }}
                    resizeMode="contai"
                    source={item.imagePost}
                  />
                </View>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  containHeader: {
    justifyContent: "center",
    marginTop: 50,
    flexDirection: "row",
    width: 360,
    minHeight: 250,
    elevation: 8,
    backgroundColor: COLOR.bg,
    borderRadius: 40,
    padding: 20,
    gap: 20,
  },
  imageUser: {
    width: 80,
    height: 130,
    resizeMode: "cover",
    borderRadius: 90,
    borderColor: COLOR.bg,
    borderWidth: 3,
    elevation: 10,
  },
  sosial: {
    marginTop: 30,
    flexDirection: "row",
    gap: 20,
  },
  sosialItem: {
    flexDirection: "column",
    backgroundColor: COLOR.secondary,
    height: 70,
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  post: {
    flex: 1,
    marginTop: 30,
  },
});
