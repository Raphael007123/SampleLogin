import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import CustomTextInput from '../../components/CustomTextInput';
import {Colors} from '../../constants/Styles';
import {Constants} from '../../constants/Constants';
import {loginUser} from '../../services/LoginService';

const Welcome = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  onEmailChange = email => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if (expression.test(String(email).toLowerCase())) {
      setEmail(String(email).toLowerCase());
    } else {
      setEmail('');
    }
  };

  onPasswordChange = password => {
    if (password && password.length > 0) {
      setPassword(password);
    } else {
      setPassword('');
    }
  };

  login = async () => {
    let data = await loginUser(email, password);
    if (data && data.success) {
      props.navigation.navigate('Home');
    } else {
      data && data.message && alert(data.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Constants.welcome}</Text>
      <CustomTextInput
        placeholder={Constants.email}
        keyboardType="email-address"
        maxLength={50}
        onChangeText={email => onEmailChange(email)}
      />
      <CustomTextInput
        placeholder={Constants.password}
        keyboardType="default"
        maxLength={10}
        secureTextEntry
        onChangeText={password => onPasswordChange(password)}
      />
      {email.length > 0 && password.length > 0 ? (
        <Button
          buttonText={Constants.login}
          buttonColor={Colors.lightBlue}
          borderColor={Colors.lightBlue}
          buttonTextColor={Colors.white}
          onPress={() => login()}
        />
      ) : (
        <Button
          buttonText={Constants.login}
          buttonColor={'grey'}
          borderColor={'grey'}
          buttonTextColor={Colors.white}
          disabled
        />
      )}

      <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
        <Text style={styles.bottomText}>{Constants.signup}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 32,
    color: Colors.black,
    padding: 40,
  },
  bottomText: {
    paddingTop: 25,
    fontSize: 20,
    color: Colors.lightBlue,
  },
});

export default Welcome;
