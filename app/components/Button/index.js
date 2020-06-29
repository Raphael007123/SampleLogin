import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const Button = ({
  buttonText,
  buttonColor,
  buttonTextColor,
  onPress,
  borderColor,
  buttonStyle,
  buttonTextStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[
        buttonStyle,
        styles.buttonContainer,
        {backgroundColor: buttonColor, borderColor: borderColor},
      ]}
      activeOpacity={disabled ? 1 : null}
      onPress={onPress}>
      <Text
        style={[buttonTextStyle, styles.buttonText, {color: buttonTextColor}]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%',
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Button;
