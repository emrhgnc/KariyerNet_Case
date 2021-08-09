using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace kariyernet_backend_case.Model
{
    public class Job : MongoBase
    {
        [BsonElement("company")]
        [Required]
        public string company { get; set; }
        [BsonElement("position")]
        [Required]
        public string position { get; set; }
        [BsonElement("description")]
        [Required]
        public string description { get; set; }
        [BsonElement("createTime")]
        public string createTime { get; set; }
        [BsonElement("quality")]
        [Required]
        public int quality { get; set; }
        [BsonElement("benefits")]        
        public string benefits { get; set; }
        [BsonElement("workType")]
        public string workType { get; set; }
        [BsonElement("sallary")]
        public string sallary { get; set; }
    }
}
