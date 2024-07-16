import axios from "axios";

const API_URL = "http://10.0.2.2:8000";

const login = async (data) => {
  try {
    const response = await axios.post(API_URL + "/login", data);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

const signup = async (data) => {
  try {
    const response = await axios.post(API_URL + "/signup", data);
    return response;
  } catch {
    console.log(error.message);
  }
};

const getUser = async () => {
  try {
    const response = await axios.get(API_URL + "/getUser");
    return response;
  } catch {
    console.log(error.message);
  }
};

const AuthService = {
  login,
  signup,
  getUser,
};

export default AuthService;
