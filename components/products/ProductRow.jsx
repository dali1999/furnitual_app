import { FlatList, View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import ProductCardview from "./ProductCardView";
import styles from "./productRow.style";
import useFetch from "../../hook/useFetch";

export default function ProductRow() {
  const { data, isLoading, error } = useFetch();
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>
          {console.log(error)}
          {error.message}
        </Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardview item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
}
