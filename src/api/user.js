import Axios from "axios";
const baseUrl = "https://go-restaurant-arbyte.herokuapp.com";

export async function login(cpf, password) {
  const response = await Axios.post(`${baseUrl}/users/login`, {
    cpf, password
  });
  console.log(response.data)
  return response.data;
}
export async function forgotpass (cpf){
  const response = await Axios.patch(`${baseUrl}/users/forgot-password`,{

  },);
  return response.data


}


export function isLogged() {
    const logged = localStorage.getItem('userData')
    return !!logged
}