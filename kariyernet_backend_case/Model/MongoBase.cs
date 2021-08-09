using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;

namespace kariyernet_backend_case.Model
{
    public abstract class MongoBase
    {
        public ObjectId id { get; set; }
    }
}
