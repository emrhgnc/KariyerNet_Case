using kariyernet_backend_case.Model;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kariyernet_backend_case.DataRepository
{
    public class IgnoreWordRepository : BaseRepository<IgnoreWord>
    {
        public IgnoreWordRepository(string connectionString, string db, string collectionName) : base(connectionString, db, collectionName)
        {
        }
        public virtual List<IgnoreWord> GetList()
        {
            return mongoCollection.Find(x => true).ToList();
        }
    }
}
