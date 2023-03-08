import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { commonStyles } from "./Styles";

export default function Btn({ text, onPress }) {
  return (
    <TouchableOpacity style={commonStyles.button} onPress={onPress}>
      <Text style={commonStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
