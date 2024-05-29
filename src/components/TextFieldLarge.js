import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

export const TextFieldLarge = ({ label, value, onChangeText, isPasswordField = false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isPasswordField}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});
