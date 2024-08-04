import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const authStoreKey = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(authStoreKey, authToken);
  } catch (error) {
    console.log("Error storing auth token key", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(authStoreKey);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getUserFromToken = async () => {
  const token = await getToken();
  if (!token) return null;

  return jwtDecode(token);
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(authStoreKey);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

const authStorage = {
  getUserFromToken,
  getToken,
  storeToken,
  removeToken,
};
export default authStorage;
