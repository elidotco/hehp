import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  ChatBubbleBottomCenterIcon,
  CreditCardIcon,
  HomeIcon,
  PlusCircleIcon,
  UserCircleIcon,
} from "react-native-heroicons/outline";

const Nav = () => {
  return (
    <View className="absolute bg-[#FFFFFF] bottom-0 rounded-t-lg shadow flex flex-row justify-between w-full h-14 items-center px-5">
      <TouchableOpacity>
        <HomeIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <ChatBubbleBottomCenterIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <PlusCircleIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <CreditCardIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <UserCircleIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Nav;
