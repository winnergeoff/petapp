import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import PixelMatrix from "../../components/PixelMatrix";
import Button from "../../components/Button";
import { useState } from "react";
import { authService } from '../../services/api/auth/auth.service';
import { showMessage } from "react-native-flash-message";
import { useContext } from 'react';
import { userContext } from '../../../App.js'

function Pet({ navigation }) {
    matrix = [[]];

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const user = useContext(userContext);
  
    const handleButtonPress = async () => {
      console.log("Button pressed!");
  
      try {
        const response = await fetch("http://10.0.0.192:5000//api/v1/new-pet");
        const json = await response.json();
        setData(json.message);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const handleSignOutButtonPress = async () => {
      console.log("Button pressed!");
  
      try {
        const response = await authService.signOut();
  
        showMessage({
          message: "Successfully logged out",
          type: "success",
        });
  
        navigation.navigate('Sign In')
      } catch (error) {
        showMessage({
          message: error.response.data['error'],
          type: "danger",
        });
        console.log(error);
      }
    };
  
    return (
      <View style={styles.container}>
      <Text>{user.username}</Text>
      <Text>{user.email}</Text>
      <Text>{user.eggs}</Text>
      <Text>{user.egg_hatchers}</Text>
        {isLoading ? (
          <PixelMatrix matrix={matrix} />
        ) : (
          <PixelMatrix matrix={data} />
        )}
        <Button title="Click me" onPress={handleButtonPress} />
        <Button title="Sign Out" onPress={handleSignOutButtonPress} />
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default Pet