import axios from '../../../services/axios';

class AuthService {
    async signUp(body) {
      const response = await axios.post('/signup', body);
      return response;
    }
  
    async signIn(body) {
      const response = await axios.post('/signin', body);
      return response;
    }

    async signOut() {
      const response = await axios.get('/signout');
      return response;
    }
  
    async forgotPassword(body) {
      const response = await axios.post('/forgot-password', body);
      return response;
    }
  
    async resetPassword(token, body) {
      const response = await axios.post(`/reset-password/${token}`, body);
      return response;
    }
  }
  
  export const authService = new AuthService();