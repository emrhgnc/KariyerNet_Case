using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace kariyernet_backend_case.Model
{
    public class Company:MongoBase
    {
        [BsonElement("phoneNumber")]
        [Required]
        public string phoneNumber { get; set; }
        [BsonElement("name")]
        [Required]
        public string name { get; set; }
        [BsonElement("address")]
        [Required]
        public string address { get; set; }
        [BsonElement("right")]
        [Required]
        public int right { get; set; }
    }
}
