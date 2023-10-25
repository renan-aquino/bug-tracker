import axios from "axios";


const API_URL = 'http://localhost:8080/auth/register'


type SignUpData = {
    name: string;
    login: string;
    password: string;
}



export async function useRegister({ name, login, password } : SignUpData) {
    try {
      const response = await axios.post(API_URL, {
        name,
        login,
        password
      });
      return response.status
      
    } catch (error) {
      console.log(error);
    }
}