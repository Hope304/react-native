import React, { useState } from "react";
import { Link, router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
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
import AuthService from "../../services/auth.service";
export default function SignUp() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [validate, setValidate] = useState({
    userName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    confirm: "",
  });

  const submit = async () => {
    setSubmitting(true);
    try {
      const result = await AuthService.signup(form);
      console.log(result.data);
      if (result.status === 200) {
        router.push("/sign-in");
      } else if (result.status === 201) {
        setValidate(result.data.error);
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
          <Text style={styles.title}>Sign up to We-Hug</Text>
          <FromField
            title="Username"
            value={form.userName}
            handleChangeText={(e) => {
              setForm({ ...form, userName: e });
              setValidate({ ...validate, userName: "" });
            }}
            validate={validate.userName}
          />
          <FromField
            title="Email"
            value={form.email}
            handleChangeText={(e) => {
              setForm({ ...form, email: e });
              setValidate({ ...validate, email: "" });
            }}
            keyboardType="email-address"
            validate={validate.email}
          />
          <FromField
            title="Password"
            value={form.password}
            handleChangeText={(e) => {
              setForm({ ...form, password: e });
              setValidate({ ...validate, password: "" });
            }}
            validate={validate.password}
          />
          <FromField
            title="Confirm Password"
            value={form.confirm}
            handleChangeText={(e) => {
              setForm({ ...form, confirm: e });
              setValidate({ ...validate, confirm: "" });
            }}
            validate={validate.confirm}
          />
          <LinearGradient
            colors={["#F68464", "#EEA849"]}
            style={{ borderRadius: 30, marginTop: 20 }}
          >
            <CustomButton
              title="Signup"
              containerStyles={{ borderWidth: 0 }}
              textStyles={{ color: COLOR.bg }}
              handlePress={submit}
              isLoading={isSubmitting}
            />
          </LinearGradient>
          <View style={styles.signUp}>
            <Text style={{ fontFamily: "Poppins-Light" }}>
              Have an account already?
            </Text>
            <Link
              style={{ color: COLOR.primary, fontFamily: "Poppins-Medium" }}
              href="/sign-in"
            >
              Login
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
    minHeight: Dimensions.get("window").height - 100,
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
