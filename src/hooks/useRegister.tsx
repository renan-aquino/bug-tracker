import axios from "axios";

type SignUpData = {
    name: string;
    login: string;
    password: string;
}


export async function useRegister({ name, login, password } : SignUpData) {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        name,
        login,
        password
      });
      return response
      
    } catch (error) {
      console.log(error);
    }
}