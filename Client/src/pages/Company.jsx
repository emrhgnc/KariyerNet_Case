import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import companyService from "../Services/companyService";
import jobServices from "../Services/jobServices";
import JobList from "../Components/JobList"
import authService from "../Services/authService";

function Company() {
  const [company, setCompany] = useState({});
  const [newJob, setNewJob] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();   
    newJob.company=company.id
    console.log(newJob);
    jobServices.createJob(newJob);
  };
  useEffect(async () => {
    let comp = await companyService.getCompany(authService.getCurrentCompany().phoneNumber)
    setCompany(comp.data);
  }, []);
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-5">
          <h2 className="fw-lighter">{company.name}</h2>
          <hr />
          <table className="table table-sm">
            <tbody>
              <tr>
                <th>Phone Number</th>
                <td>{company.phoneNumber}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{company.address}</td>
              </tr>
              <tr>
                <th>Remaining Right</th>
                <td>{company.right}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-7">
          <div className="card bg-warning rounded-0">
            <div className="card-header fw-lighter">Create job Posting</div>
            <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-0"
                    required
                    id="txtPosition"
                    placeholder="Position"
                    onChange={(e) =>
                      (newJob.position = e.target.value)
                    }
                  ></input>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control form-control-sm rounded-0"
                    required
                    id="txtDescription"
                    placeholder="Description"
                    rows="5"
                    onChange={(e) =>
                      (newJob.description = e.target.value)
                    }
                  ></textarea>
                </div>
                <div className="mb-3 row">
                  <div className="col-md-6">
                    <select
                      className="form-control form-control-sm rounded-0"
                      id="drpWorkType"
                      onChange={(e) =>
                        (newJob.workType = e.target.value)
                      }
                    >
                      <option></option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-sm rounded-0"
                      id="txtSallary"
                      placeholder="Sallary"
                      onChange={(e) =>
                        (newJob.sallary = e.target.value)
                      }
                    ></input>
                  </div>
                  <div className="mt-3 mb-3">
                    <input
                      type="text"
                      className="form-control form-control-sm rounded-0"
                      id="txtBenefits"
                      placeholder="Benefits"
                      onChange={(e) =>
                        (newJob.benefits = e.target.value)
                      }
                    ></input>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-secondary btn-sm float-end rounded-0">
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

export default Company;
