import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://sirprojectbackend.onrender.com/api",
  withCredentials: true,
});   
// const apiRequest = axios.create({
//   baseURL: "http://localhost:8080/api",
//   withCredentials: true,
// });   

export default apiRequest;
