import axios, { AxiosError, AxiosResponse } from "axios";
import { FormValue, LoginResponse } from "../interfaces";

export const login = async (
  formData: FormValue
): Promise<AxiosResponse | AxiosError> =>
  axios
    .post("http://localhost:3000/login", formData)
    .then((response: AxiosResponse<LoginResponse>) => {
      return response;
    })
    .catch((error: AxiosError<LoginResponse>) => {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(error.response);
        
      }
    });

export default login;
