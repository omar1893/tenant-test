import axios, { AxiosError, AxiosResponse } from "axios";

export const getMovieDetail = async (
  movieId: string
): Promise<AxiosResponse | AxiosError> =>
  axios
    .get(`http://www.omdbapi.com/?apikey=efe569de&i=${movieId}`)
    .then((response: AxiosResponse<any>) => {
      return response;
    })
    .catch((error: AxiosError<any>) => {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(error.response);
        
      }
    });

export default getMovieDetail;
