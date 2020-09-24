import Axios from "axios";
const baseUrl = "https://go-restaurant-arbyte.herokuapp.com";

export async function login(cpf, password) {
  const response = await Axios.post(`${baseUrl}/users/login`, {
    cpf, password
  });
  console.log(response.data)
  return response.data;
}

// export function isLoggedIn() {
//   return !!localStorage.getItem("userData");
// }