import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from "../../components/Button";
import { authService } from '../../services/api/auth/auth.service';
import { showMessage } from "react-native-flash-message";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    console.log('Requesting password reset...');

    try {
      const response = await authService.forgotPassword({
        "email":email,
      });
      
      showMessage({
        message: "Password recovery email sent.",
        type: "success",
      });
      
      navigation.navigate('Home')
    } catch (error) {
      showMessage({
        message: error.response.data['error'],
        type: "danger",
      });
      console.log(error.response.data['error']);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Reset Password" onPress={handleForgotPassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ForgotPassword;