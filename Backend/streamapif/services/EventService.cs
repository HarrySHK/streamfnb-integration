using System;
using System.Collections.Generic;
using System.Linq;
using streamapi.Models;
using MongoDB.Driver;
using streamapif.Models;

namespace streamapif.services
{
    public class EventService : IEventService
    {
        private readonly IMongoCollection<Event> _events;

        public EventService(IVideosStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _events = database.GetCollection<Event>(settings.EventCollection);
        }

        public Event Create(Event ev)
        {
            _events.InsertOne(ev);
            return ev;
        }

        public List<Event> Get()
        {
            return _events.Find(e => true).ToList();
        }

        public Event Get(string id)
        {
            return _events.Find(e => e.Id == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            _events.DeleteOne(e => e.Id == id);
        }

        public void Update(string id, Event ev)
        {
            _events.ReplaceOne(e => e.Id == id, ev);
        }
    }
}
