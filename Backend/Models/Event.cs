using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace streamapif.Models
{
    public class Event
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        public string Name { get; set; } = string.Empty;
        public string Thumbnail { get; set; } = string.Empty;
        public string Trending { get; set; } = string.Empty;
        public DateTime Date { get; set; }

        
    }
}
