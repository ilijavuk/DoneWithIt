import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.70:9000/api",
  headers: {},
});

export default apiClient;
