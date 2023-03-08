import React from "react";
import { TextInput } from "react-native";
import { commonStyles } from "./Styles";

const TextInputField = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      style={commonStyles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default TextInputField;
