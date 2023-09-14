import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

export default function Carousel() {
  const slides = [
    "https://www.ikea.com/images/billy-series-77639f3faed6077c31520a7544321d2b.jpg?f=xs",
    "https://www.ikea.com/images/vihals-series-d920c627fda386d2f91e708d065211a1.jpg?f=xs",
    "https://www.ikea.com/images/malm-series-8c060cda30fc84920152dc33556dd91c.jpg?f=xs",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "93%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
}
const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
