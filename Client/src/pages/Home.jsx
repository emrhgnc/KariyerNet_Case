import React, { useEffect, useState } from "react";
import CompanyService from "../Services/companyService";
import authService from "../Services/authService";

function Home() {
  const [newCompany, setNewCompany] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.id === "signUpForm") {
      CompanyService.createCompany(newCompany);
    } else if (e.target.id === "signInForm") {
      authService.login(phoneNumber).then(() => {
        window.location.reload("/company");
      });
    }
  };
  useEffect(() => {});
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card text-white bg-secondary rounded-0">
            <form id="signUpForm" onSubmit={handleSubmit}>
              <div className="card-header fw-lighter">Sign Up</div>
              <div className="card-body">
                <div className="mb-3 row">
                  <label
                    htmlFor="txtPhoneNumber"
                    className="col-sm-4 col-form-label"
                  >
                    Phone Number
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      required
                      className="form-control form-control-sm rounded-0"
                      id="txtPhoneNumber"
                      onChange={(e) =>
                        (newCompany.phoneNumber = e.target.value)
                      }
                    ></input>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="txtName" className="col-sm-4 col-form-label">
                    Company Name
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control form-control-sm rounded-0"
                      id="txtName"
                      required
                      onChange={(e) => (newCompany.name = e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="txtAddress"
                    className="col-sm-4 col-form-label"
                  >
                    Address
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      required
                      className="form-control form-control-sm rounded-0"
                      id="txtAddress"
                      onChange={(e) => (newCompany.address = e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-light btn-sm rounded-0 float-end">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-white bg-info rounded-0">
            <div className="card-header">Sign In</div>
            <form id="signInForm" onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="mb-3 row">
                  <label
                    htmlFor="txtPhoneNumberLogIn"
                    className="col-sm-4 col-form-label"
                  >
                    Phone Number
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      className="form-control form-control-sm rounded-0"
                      id="txtPhoneNumberLogIn"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm rounded-0 float-end"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
