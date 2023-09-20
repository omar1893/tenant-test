import axios, {AxiosError, AxiosResponse} from "axios";
import { AnimalData } from "../interfaces";

export const getAnimal = async (token: string) : Promise<AxiosResponse | AxiosError> =>
  axios
    .get("http://localhost:3000/randomAnimal", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response: AxiosResponse<AnimalData>) => {
      return response;
    })
    .catch((error: AxiosError) => {
      return error;
    });

export default getAnimal;
