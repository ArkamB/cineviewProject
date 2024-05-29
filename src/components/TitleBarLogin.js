import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const TitleBarLogin = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#ff5a5f",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
