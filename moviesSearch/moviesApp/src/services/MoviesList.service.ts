import axios, { AxiosError, AxiosResponse } from "axios";

export const getList = async (
  searchInput: string
): Promise<AxiosResponse | AxiosError> =>
  axios
    .get(`http://www.omdbapi.com/?apikey=efe569de&s=${searchInput}`)
    .then((response: AxiosResponse<any>) => {
      console.log(response);

      localStorage.setItem('lastSearch', searchInput)
      localStorage.setItem('previousList', JSON.stringify(response.data.Search))
      return response;
    })
    .catch((error: AxiosError<any>) => {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(error.response);
      }
    });

export default getList;
