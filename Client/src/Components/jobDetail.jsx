import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import jobService from "../Services/jobServices";

function Job() {
  const [job, setJob] = useState({});
  const id = useParams();
  useEffect(async () => {
    
    let tempJob=await jobService.getJob(id.id)
    setJob(tempJob.data);
    console.log(job);
  });
  return (
    <div className="row">
      <div className="row mb-3">
        <div className="col-md-4">
          <h5>Position</h5>
        </div>
        <div className="col-md-8">
          <p>{job.position}</p>
        </div>
      </div>
      <hr/>
      <div className="row mb-3">
        <div className="col-md-4">
          <h5>Descripton</h5>
        </div>
        <div className="col-md-8">
          <p>{job.description}</p>
        </div>
      </div>
      <hr/>
      <div className="row mb-3">
        <div className="col-md-4">
          <h5>Benefits</h5>
        </div>
        <div className="col-md-8">
          <p>{job.benefits}</p>
        </div>
      </div>
      <hr/>
      <div className="row mb-3">
        <div className="col-md-4">
          <h5>Work Type</h5>
        </div>
        <div className="col-md-8">
          <p>{job.workType}</p>
        </div>
      </div>
      <hr/>
      <div className="row mb-3">
        <div className="col-md-4">
          <h5>Salllary</h5>
        </div>
        <div className="col-md-8">
          <p>{job.sallary}</p>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default Job;
