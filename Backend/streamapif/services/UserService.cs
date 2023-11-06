using System;
using System.Collections.Generic;
using System.Linq;
using streamapi.Models;
using MongoDB.Driver;
using streamapif.services;
using streamapif.Models;

namespace streamapif.services
{
    public class UserService : IUserService
    {
        private readonly IMongoCollection<User> _users;

        public UserService(IVideosStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _users = database.GetCollection<User>(settings.UserCollection);
        }

        public User Create(User user)
        {
            _users.InsertOne(user);
            return user;
        }

        public List<User> Get()
        {
            return _users.Find(u => true).ToList();
        }

        public User Get(string id)
        {
            return _users.Find(u => u.Id == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            _users.DeleteOne(u => u.Id == id);
        }

        public void Update(string id, User user)
        {
            _users.ReplaceOne(u => u.Id == id, user);
        }
    }
}
