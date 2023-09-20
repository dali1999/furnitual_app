import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Ionicons,
  Fontisto,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import styles from "./newRivals.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import { ProductLists } from "../components";

export default function NewRivals({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>

          <Text style={styles.heading}>Products</Text>
        </View>
        <ProductLists />
      </View>
    </SafeAreaView>
  );
}
