import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function BottomSheet() {
  return (
    <GestureDetector>
      <Animated.View style={styles.bottomSheetContainer}>
        <View style={styles.line} />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    top: SCREEN_HEIGHT / 1.65,
    borderRadius: 30,
  },
  line: {
    width: 50,
    height: 3,
    backgroundColor: "lightgrey",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 5,
  },
});
