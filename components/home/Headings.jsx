import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./heading.style";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

export default function Headings() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductLists")}>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
