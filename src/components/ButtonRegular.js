import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const ButtonRegular = ({ label, clickFunction }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={clickFunction}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff5a5f", // Red background color
    borderRadius: 3, // Adjust border radius as needed
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold", // Apply bold font weight
  },
});
