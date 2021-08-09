import axios from "axios";
const API_URL = "http://localhost:5000/api/v1/";
async function createCompany(company) {
  let result = false;
  result = axios
    .post(API_URL + "companies", company)
    .then((result = true))
    .catch((err) => {
      console.log(err);
    });
  return result;
}

async function getCompanies() {
  let companies = [];
  try {
    companies = await axios.get(API_URL + "companies");
  } catch (err) {
    console.log(err);
  }
  return companies;
}
async function getCompany(phoneNumber) {
  let company = {};
  try {
    company = await axios.get(API_URL + "companies/" + phoneNumber);
  } catch (err) {
    console.log(err);
  }
  return company;
}

export default {
  createCompany,
  getCompanies,
  getCompany,
};
