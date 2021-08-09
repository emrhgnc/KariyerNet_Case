import React, { useEffect, useState } from "react"
import jobServices from "../Services/jobServices"
import JobList from "../Components/JobList";

function Jobs(){
    const [jobs, setJobs]= useState([])
    useEffect(async ()=>{
        let tempJobs=await jobServices.getJobs();
        console.log(tempJobs);
        setJobs(tempJobs.data);
    },[])
    return(
        <div className="container-fluid">
            <JobList posts={jobs}/>
            
        </div>
    )
}

export default Jobs