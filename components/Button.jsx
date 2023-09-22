import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btn}>
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
  btn: {
    height: 50,
    width: "100%",
    marginVertical: 20,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
