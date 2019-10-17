import http from "./httpService";
import { apiUrl } from "../config.json";

export async function register(user) {
  return await http.post(apiUrl + "/users", {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
