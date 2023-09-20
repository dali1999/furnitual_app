import React from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import styles from "./productLists.style";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES } from "../../constants/index";
import ProductCardView from "./ProductCardView";

export default function componentName() {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCardView item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
