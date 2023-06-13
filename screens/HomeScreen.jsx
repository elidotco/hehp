import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Hpc, Nav } from "../components";

const HomeScreen = () => {
  return (
    <SafeAreaView className=" w-full h-screen bg-[#ffffff]  relative">
      <Nav />
      <View className="pt-10 px-5">
        <View className="flex flex-row justify-between items-center ">
          <View className="flex flex-row items-center gap-2">
            <View>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                }}
                className="w-14 h-14 rounded-full"
              />
            </View>
            <View>
              <Text className=" text-[#7c7c7c]  font-semib text-lg old">
                Welcome Back
              </Text>
              <Text className="text-[#0077ff] text-3xl font-bold">Eli </Text>
            </View>
          </View>
          <TouchableOpacity className="flex flex-row items-center   border rounded-full w-10 border-[#Dadada] h-10 justify-center ">
            <BellIcon color="#165069" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row border border-[#b8b8b8] h-12 mt-10 px-4 items-center w-full rounded-lg bg-[#f5f5f5]">
          <MagnifyingGlassIcon color="#c0c0c0" />
          <TextInput
            className="flex-1 h-full "
            placeholder="Who are you looking for ?"
          />
        </View>

        {/* Balance Sheet Card */}
        <View className="flex flex-col items-center w-full h-44 justify-between  bg-[#FAFAFD] shadow-md shadow-gray-400   mt-10 rounded-xl pt-2">
          <View className="items-center">
            <Text className="text-lg">Daily Contribution</Text>
            <Text className="text-2xl font-bold">$400</Text>
          </View>

          <View className="flex-row justify-between w-full bg-gray-100 h-2/5 bg-opacity-50 p-3 rounded-b-lg ">
            <View className="flex-col border-r pr-2">
              <Text className="text-lg">Total Contribution</Text>
              <Text className="text-lg">Total Contribution</Text>
            </View>
            <View>
              <Text className="text-lg">Total Contribution</Text>
            </View>
          </View>
        </View>
        <Hpc />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
