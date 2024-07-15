import React, { useState } from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import AuthService from "../../services/auth.service";
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLOR, images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import FromField from "../../components/FromField";
import CustomButton from "../../components/CustomButton";
export default function SignIn() {
  const [isSubmitting, setSubmitting] = useState(false);
  // const []
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Hãy điền tất cả");
    }
    setSubmitting(true);
    try {
      const result = await AuthService.login(form);
      console.log(result.data);
      if(result.status === 200){
        Alert.alert("Đăng nhập thành công");
      }else{
        Alert.alert(result.data);
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLOR.secondary, height: "100%" }}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={images.logo} style={styles.logo} />
          <Text style={styles.title}>Log in to We-Hug</Text>
          <FromField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />
          <FromField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
          <LinearGradient
            colors={["#F68464", "#EEA849"]}
            style={{ borderRadius: 30, marginTop: 20 }}
          >
            <CustomButton
              title="Login"
              containerStyles={{ borderWidth: 0 }}
              textStyles={{ color: COLOR.bg }}
              handlePress={submit}
              isLoading={isSubmitting}
            />
          </LinearGradient>
          <View style={styles.signUp}>
            <Text style={{ fontFamily: "Poppins-Light" }}>
              Don't have an account?
            </Text>
            <Link
              style={{ color: COLOR.primary, fontFamily: "Poppins-Medium" }}
              href="/sign-up"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: " 100%",
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 40,
    marginVertical: 20,
    minHeight: Dimensions.get("window").height - 800,
  },
  logo: {
    width: 300,
    height: 240,
    resizeMode: "contain",
  },
  title: {
    color: COLOR.primary,
    fontFamily: "Poppins-SemiBold",
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
  },
  signUp: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    marginTop: 10,
  },
});
