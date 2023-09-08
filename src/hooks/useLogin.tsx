import axios from "axios";


const API_URL = 'http://localhost:8080/auth/login'


type SignInData = {
    login: string;
    password: string;
}

interface AuthAPIResponse {
    token: string,
    user: { name: string }
}


export async function useLogin({ login, password } : SignInData) {
    try {
      const response = await axios.post<AuthAPIResponse>(API_URL, {
        login,
        password
      });
      return {
        token: response.data.token,
        user: response.data.user
      }

    } catch (error) {
      console.log(error);
    }
}