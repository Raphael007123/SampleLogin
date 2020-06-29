import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const CustomTextInput = ({
  containerStyle,
  inputStyle,
  placeholder,
  keyboardType,
  onChangeText,
  secureTextEntry,
  maxLength,
}) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <TextInput
        style={[styles.inputs, inputStyle]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}
        underlineColorAndroid="transparent"
        onChangeText={email => onChangeText(email)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#00BCD4',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderBottomWidth: 1,
    width: '80%',
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#00BCD4',
    color: '#00BCD4',
    flex: 1,
    fontSize: 18,
  },
});

export default CustomTextInput;
