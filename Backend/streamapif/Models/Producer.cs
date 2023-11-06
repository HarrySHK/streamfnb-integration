using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace streamapif.Models
{
    public class Producer
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        public List<string> Type { get; set; } = new List<string>();
        public string Name { get; set; } = string.Empty;
        public string Intro { get; set; } = string.Empty;
        public List<string> ShowsList { get; set; } = new List<string>();
        public string Thumbnail { get; set; } = string.Empty;
        public string Rating { get; set; } = string.Empty;
        public string Weblink { get; set; } = string.Empty;
        public string Handle { get; set; } = string.Empty;
    }
}
