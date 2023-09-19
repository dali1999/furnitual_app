import { FlatList, View, Text } from "react-native";
import React from "react";
import { SIZES } from "../../constants";
import ProductCardview from "./ProductCardView";
import styles from "./productRow.style";

export default function ProductRow() {
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardview />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
}
