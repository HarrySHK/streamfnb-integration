using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace streamapi1.Models
{
    public class Categories
    {
         [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id {get; set;} = String.Empty;
        [BsonElement("videos")]
        public string Video {get; set;} = String.Empty;
        [BsonElement("title")]
        public string title {get; set;} = String.Empty;
        [BsonElement("image")]
        public string image {get; set;} = String.Empty;
        [BsonElement("description")]
        public string description {get; set;} = String.Empty;
        [BsonElement("profile1")]
        public string profile1 {get; set;} = String.Empty;
        [BsonElement("profile2")]
        public string profile2 {get; set;} = String.Empty;
        [BsonElement("profile3")]
        public string profile3 {get; set;} = String.Empty;
        [BsonElement("profile4")]
        public string profile4 {get; set;} = String.Empty;
    }
}