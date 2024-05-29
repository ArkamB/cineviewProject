import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../screens/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await AsyncStorage.setItem("myuser", JSON.stringify(user));
      navigation.navigate("HomeTab");
    } catch (error) {
      console.error("Error during sign up:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SignUp;
