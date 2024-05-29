import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../screens/firebase";
import { signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await AsyncStorage.setItem("myuser", JSON.stringify(user));
      navigation.navigate("HomeTab");
    } catch (error) {
      console.error("Error during sign in:", error.message);
    }
  };

  const signInGuest = async () => {
    try {
      const userCredential = await signInAnonymously(auth);
      console.log('Guest signed in:', userCredential.user);
      navigation.navigate("HomeTab");
    } catch (error) {
      console.error("Error during guest sign in:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.guestButton} onPress={signInGuest}>
        <Text style={styles.guestButtonText}>Continue as Guest</Text>
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
  guestButton: {
    marginTop: 20,
  },
  guestButtonText: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default LogIn;
