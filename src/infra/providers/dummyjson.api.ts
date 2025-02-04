import axios from "axios";
import { HttpError } from "../../shared/errors/http-error.class";

 const dummyjsonApiConnection = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 10000
});

const dummyjsonApi = async (url: string) => {
  const { data } = await dummyjsonApiConnection.get(url);

  if(!data){
    throw new HttpError(400, "Service with dummyjsonApi don't working");
  }

  return data;
};

export default dummyjsonApi;
