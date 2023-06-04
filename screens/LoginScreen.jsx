import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import {
  ArrowSmallLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "react-native-heroicons/outline";

const LoginScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View className="h-screen bg-[#ffffff] pt-16 px-5">
      <TouchableOpacity className="text-lg  rounded-full w-12 h-12 flex items-center justify-center bg-[#0077ff]">
        <ArrowSmallLeftIcon size={30} color={"white"} />
      </TouchableOpacity>
      <View className="    flex items-center pt-10 bn  h-full ">
        <View className=" flex flex-col w-full items-center">
          <Text className="text-lg text-[#0077ff] font-bold">Welcome</Text>
          <Text>Sign into your account</Text>
        </View>
        <View className="w-full">
          <View className="">
            <Text>Email</Text>
            <TextInput className="h-12 bg-[#f5f5f5] rounded-xl mt-5 mb-5 px-2" />
          </View>
          <View>
            <Text>Password</Text>
            <View className="h-14 bg-[#f5f5f5] rounded-xl items-center mt-5 px-2 flex-row">
              <TextInput
                secureTextEntry={isOpen}
                className="flex-1 w-full h-full text-lg"
              />
              <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                {isOpen ? <EyeSlashIcon /> : <EyeIcon />}
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity>forgot password ?</TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
