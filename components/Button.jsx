import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

export default function Button({ title, onPress, isValid }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btn(isValid === false ? COLORS.gray : COLORS.primary)}
    >
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btnTxt: {
    fontFamily: "bold",
    color: COLORS.lightWhite,
    fontSize: 18,
  },
  btn: (backgroundColor) => ({
    height: 50,
    width: "100%",
    marginVertical: 20,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  }),
});
