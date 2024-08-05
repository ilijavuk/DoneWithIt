import apiClient from "./client";

const register = (token) =>
  apiClient.post("/expoPushTokens", {
    token,
  });

const expoPushTokensApi = {
  register,
};

export default expoPushTokensApi;
