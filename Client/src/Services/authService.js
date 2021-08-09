import axios from "axios";
const API_URL = "http://localhost:5000/api/v1/";
function login(phoneNumber) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phoneNumber }),
  };

  return fetch(API_URL + "companies/"+phoneNumber)
    .then((response) => response.json())
    .then((data) => localStorage.setItem("company", JSON.stringify(data)));
}

const getCurrentCompany = () => {
  const user = JSON.parse(localStorage.getItem("company"));
  return user;
};

export default {
  login,
  getCurrentCompany,
};
