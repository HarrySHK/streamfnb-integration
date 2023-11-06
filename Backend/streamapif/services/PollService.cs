using System;
using System.Collections.Generic;
using System.Linq;
using streamapi.Models;
using MongoDB.Driver;
using streamapif.Models;

namespace streamapif.services
{
    public class PollService : IPollService
    {
        private readonly IMongoCollection<Poll> _polls;

        public PollService(IVideosStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _polls = database.GetCollection<Poll>(settings.PollCollection);
        }

        public Poll Create(Poll poll)
        {
            _polls.InsertOne(poll);
            return poll;
        }

        public List<Poll> Get()
        {
            return _polls.Find(poll => true).ToList();
        }

        public Poll Get(string id)
        {
            return _polls.Find(poll => poll.Id == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            _polls.DeleteOne(poll => poll.Id == id);
        }

        public void Update(string id, Poll poll)
        {
            _polls.ReplaceOne(poll => poll.Id == id, poll);
        }
    }
}
