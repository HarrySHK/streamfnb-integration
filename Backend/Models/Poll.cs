using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace streamapif.Models
{
    public class Poll
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("Event")]
        public string Event { get; set; } = string.Empty;

        [BsonElement("Producer")]
        public string Producer { get; set; } = string.Empty;

        [BsonElement("Date")]
        [BsonRepresentation(BsonType.DateTime)]
        public DateTime Date { get; set; } = DateTime.Now;

        [BsonElement("SurveyDataList")]
        public SurveyData SurveyDataList { get; set; } = new SurveyData();
    }

    public class SurveyData
    {
        [BsonElement("Item")]
        public string Item { get; set; } = string.Empty;

        [BsonElement("Value")]
        public string Value { get; set; } = string.Empty;
    }
}
