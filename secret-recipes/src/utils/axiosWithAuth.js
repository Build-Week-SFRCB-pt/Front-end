import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://lambdaschool-cookbook2.herokuapp.com/",
    headers: {
      Authorization: token
    }
  });
};
