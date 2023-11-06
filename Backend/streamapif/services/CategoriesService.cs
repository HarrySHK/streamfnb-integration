using System;
using System.Collections.Generic;
using System.Linq;
using streamapi1.Models;
using MongoDB.Driver;
using streamapi1.services;
using streamapi.Models;

namespace streamapi.services
{
    public class CategoriesService : ICategoriesService
    {
        private readonly IMongoCollection<Categories> _categories;

        public CategoriesService(IVideosStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _categories = database.GetCollection<Categories>(settings.CategoriesCollectionName);
        }

        public Categories Create(Categories category)
        {
            _categories.InsertOne(category);
            return category;
        }

        public List<Categories> Get()
        {
            return _categories.Find(cat => true).ToList();
        }

        public Categories Get(string id)
        {
            return _categories.Find(cat => cat.Id == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            _categories.DeleteOne(cat => cat.Id == id);
        }

        public void Update(string id, Categories category)
        {
            _categories.ReplaceOne(cat => cat.Id == id, category);
        }
    }
}
