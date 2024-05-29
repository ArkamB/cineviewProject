import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ButtonRegular } from "../components/ButtonRegular";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", paddingBottom: 20 }}>
      <Image
        source={require("../../assets/images/welcome.jpg")}
        style={{ position: "absolute", width: "100%", height: "100%" }}
        resizeMode="cover"
      />

      <StatusBar style="light" />

      {/* Title and Button */}
      <View style={{ alignItems: "center", justifyContent: "center", maxWidth: "80%" }}>
        <View style={{ backgroundColor: "#ff5a5f", padding: 16, borderRadius: 20 }}>
          <Text style={{ color: "white", fontSize: 32, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>C.V</Text>
        </View>
        <Text style={{ color: "white", fontSize: 32, fontWeight: "bold", marginBottom: 10 }}>Cine-View</Text>

        <Text style={{ color: "white", marginBottom: 10, fontSize: 18, textAlign: "center" }}>
          Movies that match your mood.
        </Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <ButtonRegular label="Let's Get Started" clickFunction={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
}
