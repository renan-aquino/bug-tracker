import axios from "axios";

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
      const response = await axios.post<AuthAPIResponse>(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
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