using kariyernet_backend_case.Model;
using MongoDB.Driver;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kariyernet_backend_case.DataRepository
{
    public class CompanyRepository : BaseRepository<Company>
    {
        public CompanyRepository(string connectionString, string db, string collectionName) : base(connectionString, db, collectionName)
        {            
        }

        public virtual List<Company> GetList()
        {
            return mongoCollection.Find(x => true).ToList();
        }

        public virtual Company GetbyPhone(string phoneNumber)
        {
            return mongoCollection.Find<Company>(x => x.phoneNumber == phoneNumber).FirstOrDefault();
        }
        public virtual Company GetbyId(string id)
        {
            var docId = new ObjectId(id);
            return mongoCollection.Find<Company>(x => x.id == docId).FirstOrDefault();
        }

        public virtual Company Create(Company company)
        {
            company.right = 2;
            mongoCollection.InsertOne(company);
            return company;
        }
        public virtual void Update(Company company)
        {
            mongoCollection.ReplaceOne(x => x.id == company.id, company);
        }
    }
}
