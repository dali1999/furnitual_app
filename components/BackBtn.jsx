import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";
import { COLORS } from "../constants";
export default function BackBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary} />
    </TouchableOpacity>
  );
}
