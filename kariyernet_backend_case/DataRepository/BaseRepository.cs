using kariyernet_backend_case.Model;
using MongoDB.Driver;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace kariyernet_backend_case.DataRepository
{
    public class BaseRepository<TModel>
        where TModel : MongoBase
    {
        public readonly IMongoCollection<TModel> mongoCollection;

        public BaseRepository(string connectionString, string db, string collection)
        {
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase(db);
            mongoCollection = database.GetCollection<TModel>(collection);
        }


    }
}
