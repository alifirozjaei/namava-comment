import axios from "axios";
const LOGIN_URL = "https://www.namava.ir/api/v1.0/accounts/login/by-email";

async function login(data) {
  try {
    const response = await axios.post(LOGIN_URL, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default login;
