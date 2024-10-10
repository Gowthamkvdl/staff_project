import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://sirprojectbackend.onrender.com/api",
  withCredentials: true,
});   

export default apiRequest;
