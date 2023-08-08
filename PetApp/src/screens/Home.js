import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { userService } from '../services/api/user/user.service';
import { showMessage } from "react-native-flash-message";
import getLocalStorage from "../hooks/getLocalStorage";

function Home({ navigation }) {
    const userId = getLocalStorage('user_id');
    const userInfo = getUserInfoByID();
    const username = userInfo['username'];

    const getUserInfoByID = async () => {
        console.log('Getting user info...');
        
        try {
          const response = await userService.getUserInfo(userId);
          return response.data;
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
        <Text>Hello</Text>
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

export default Home;