import axios from "axios";

 const dummyjsonApi = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000
});

export default dummyjsonApi;
