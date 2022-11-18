import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
} from "react-native";
import React from "react";
import { GestureDetector } from "react-native-gesture-handler";

const Separator = () => <View style={styles.separator} />;

export default function CustomButton() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <GestureDetector>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>
        </GestureDetector>
      </View>
      <Separator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    padding: 10,
  },
  button: {
    backgroundColor: "#6c5ce7",
    padding: 15,
    borderRadius: 99,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 80,
  },
});
