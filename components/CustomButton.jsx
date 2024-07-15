import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLOR } from "../constants";
import React from "react";

export default function CustomButton({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.containerButton,
        containerStyles,
        isLoading ? "opacity-50" : "",
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    display: "flex",
    minHeight: 62,
    borderRadius: 40,
    borderColor: COLOR.textSecond,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: COLOR.textPrimary,
    fontFamily: "Poppins-SemiBold",
  },
});
