using System;
using System.Collections.Generic;
using System.Linq;
using streamapi.Models;
using MongoDB.Driver;
using streamapif.Models;

namespace streamapif.services
{
    public class ProducerService : IProducerService
    {
        private readonly IMongoCollection<Producer> _producers;

        public ProducerService(IVideosStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _producers = database.GetCollection<Producer>(settings.ProducerCollection);
        }

        public Producer Create(Producer producer)
        {
            _producers.InsertOne(producer);
            return producer;
        }

        public List<Producer> Get()
        {
            return _producers.Find(prod => true).ToList();
        }

        public Producer Get(string id)
        {
            return _producers.Find(prod => prod.Id == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            _producers.DeleteOne(prod => prod.Id == id);
        }

        public void Update(string id, Producer producer)
        {
            _producers.ReplaceOne(prod => prod.Id == id, producer);
        }
    }
}
