import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLOR, icons } from "../constants";
export default function FromField({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus(true);
  };
  const handleBlur = () => {
    setFocus(false);
  };
  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.mainForm, isFocus && styles.focus]}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={COLOR.textSecond}
          onChangeText={handleChangeText}
          secureTextEntry={
            (title === "Password" || title === "Confirm Password") &&
            !showPassword
          }
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {(title === "Password" || title === "Confirm Password") && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              style={styles.icon}
              source={!showPassword ? icons.eye : icons.eyeHide}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  title: {
    fontFamily: "Poppins-Medium",
  },
  mainForm: {
    width: "100%",
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    backgroundColor: COLOR.bg,
  },
  focus: {
    borderColor: COLOR.primary,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontFamily: "Poppins-Medium",
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
