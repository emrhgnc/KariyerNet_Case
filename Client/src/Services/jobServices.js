import axios from "axios";
import moment from "moment";
const API_URL = "http://localhost:5000/api/v1/";
async function getJobs() {
  let job = {};
  try {
    job = await axios.get(API_URL + "jobs");
  } catch (err) {
    console.log(err);
  }
  return job;
}
async function getJob(id) {
  let job = {};
  try {
    job = await axios.get(API_URL + "jobs/"+id);
  } catch (err) {
    console.log(err);
  }
  return job;
}
async function createJob(job){
  try {
    job.createTime=moment();
    await axios.post(API_URL+"jobs",job);
  } catch (error) {
    
  }
}

export default{
    getJobs,
    getJob,
    createJob
}
