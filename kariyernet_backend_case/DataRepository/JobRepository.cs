using kariyernet_backend_case.Model;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kariyernet_backend_case.DataRepository
{
    public class JobRepository : BaseRepository<Job>
    {
        public JobRepository(string connectionString, string db, string collectionName) : base(connectionString, db, collectionName)
        {
        }

        public virtual List<Job> GetList()
        {
            return mongoCollection.Find(x => true).ToList();
        }
        public virtual List<Job> GetByEndTime(int day)
        {
            var jobs = mongoCollection.Find(x => true).ToList();
            List<Job> result = new List<Job>();
            foreach (var item in jobs)
            {

                TimeSpan span = DateTime.Parse(item.createTime).AddDays(15).Subtract(DateTime.Now);
                if (span.Days <= day)
                {
                    result.Add(item);
                }
            }
            return result;
        }

        public virtual Job GetJob(string id)
        {
            var docId = new ObjectId(id);
            return mongoCollection.Find<Job>(x => x.id == docId).FirstOrDefault();
        }
        public virtual Job Create(Job job)
        {
            mongoCollection.InsertOne(job);
            return job;
        }

    }
}
