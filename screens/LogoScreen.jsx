import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const LogoScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 5000);
  });

  return (
    <SafeAreaView className="flex-1 h-screen bg-[#0077ff] items-center justify-center text-teal-100">
      <Text className=" text-teal-100 text-lg">LogoScreen</Text>
    </SafeAreaView>
  );
};

export default LogoScreen;
