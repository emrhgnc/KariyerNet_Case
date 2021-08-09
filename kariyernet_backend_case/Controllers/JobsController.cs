using kariyernet_backend_case.DataRepository;
using kariyernet_backend_case.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace kariyernet_backend_case.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly JobRepository jobRepository;
        private readonly CompanyRepository CompanyRepository;
        private readonly IgnoreWordRepository ignoreWordRepository;
        public JobsController(JobRepository data, CompanyRepository compData, IgnoreWordRepository wordData)
        {
            jobRepository = data;
            CompanyRepository = compData;
            ignoreWordRepository = wordData;
        }
        // GET: api/<JobsController>
        [HttpGet]
        public virtual ActionResult Get()
        {
            return Ok(this.jobRepository.GetList());
        }
        // GET: api/<JobsController>
        [Route("getbyEndtime/{day}")]
        public virtual ActionResult Get(int day)
        {
            return Ok(this.jobRepository.GetByEndTime(day));
        }

        // GET api/<JobsController>/5
        [HttpGet("{id}")]
        public ActionResult Get(string id)
        {
            var job = this.jobRepository.GetJob(id);
            if (job == null)
                return NotFound();
            return Ok(job);
        }

        // POST api/<JobsController>
        [HttpPost]
        public virtual ActionResult Post([FromBody] Job job)
        {
            var company = CompanyRepository.GetbyId(job.company);
            job.createTime = DateTime.Now.ToString();
            if (company.right > 0)
            {
                company.right = company.right - 1;
                CompanyRepository.Update(company);
                var words = ignoreWordRepository.GetList();
                job.quality = 0;
                if (!string.IsNullOrEmpty(job.workType))
                    job.quality = job.quality + 1;
                if (!string.IsNullOrEmpty(job.sallary))
                    job.quality = job.quality + 1;
                if (!string.IsNullOrEmpty(job.benefits))
                    job.quality = job.quality + 1;

                int ignoreWordCount = 0;
                foreach (var item in words)
                {
                    if (job.description.Contains(item.word))
                        ignoreWordCount = ignoreWordCount + 1;
                }
                if (ignoreWordCount <= 0)
                    job.quality = job.quality + 2;
                return Ok(this.jobRepository.Create(job));
            }
            else
                return BadRequest();
        }

        // PUT api/<JobsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<JobsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}