import Axios from "axios";
const baseUrl = "URL DA API AQUI";

export async function login(CPF, password) {
  const response = await Axios.post(`${baseUrl}/users/login`, {
    CPF, password
  });

  return response.data;
}

// export function isLoggedIn() {
//   return !!localStorage.getItem("userData");
// }