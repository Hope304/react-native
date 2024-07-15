import axios from "axios";

const API_URL = "http://10.0.2.2:8000";

const login = async (data) => {
  try {
    const response = await axios.post(API_URL + "/login", data);
    
    return response.data;

  } catch (error) {
    console.log(error.message);
  }
};


const AuthService = {
  login,
};

export default AuthService ;