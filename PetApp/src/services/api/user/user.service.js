import axios from '../../../services/axios';

class UserService {
    async getUserInfo(id) {
      const url = '/user/' + id;
      const response = await axios.get(url);
      console.log(response);
      return response;
    }
  }
  
  export const userService = new UserService();