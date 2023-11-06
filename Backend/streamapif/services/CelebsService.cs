using System;
using System.Collections.Generic;
using System.Linq;
using streamapi.Models;
using MongoDB.Driver;
using streamapif.services;

namespace streamapi.services
{
    public class CelebsService : ICelebsService
    {
        private readonly IMongoCollection<Celebs> _celebs;

        public CelebsService(IVideosStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _celebs = database.GetCollection<Celebs>(settings.CelebsCollection);
        }

        public Celebs Create(Celebs celeb)
        {
            _celebs.InsertOne(celeb);
            return celeb;
        }

        public List<Celebs> Get()
        {
            return _celebs.Find(celeb => true).ToList();
        }

        public Celebs Get(string id)
        {
            return _celebs.Find(celeb => celeb.Id == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            _celebs.DeleteOne(celeb => celeb.Id == id);
        }

        public void Update(string id, Celebs celeb)
        {
            _celebs.ReplaceOne(celeb => celeb.Id == id, celeb);
        }
    }
}
