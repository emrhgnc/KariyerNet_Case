using Microsoft.AspNetCore.Mvc;
using kariyernet_backend_case.Model;
using kariyernet_backend_case.DataRepository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace kariyernet_backend_case.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        private readonly CompanyRepository companyRepository;
        public CompaniesController(CompanyRepository data)
        {
            companyRepository = data;
        }
        // GET: api/<CompaniesController>
        [HttpGet]
        public virtual ActionResult Get()
        {
            return Ok(this.companyRepository.GetList());
        }

        // GET api/<CompaniesController>/5
        [HttpGet("{phoneNumber}")]
        public ActionResult Get(string phoneNumber)
        {
            var company = this.companyRepository.GetbyPhone(phoneNumber);
            if (company == null)
                return NotFound();
            return Ok(company);
        }

        // POST api/<CompaniesController>
        [HttpPost]
        public virtual ActionResult Post([FromBody] Company company)
        {

            if (this.companyRepository.GetbyPhone(company.phoneNumber) == null)
                return Ok(this.companyRepository.Create(company));
            else
                return BadRequest();
        }

        // PUT api/<CompaniesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CompaniesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
