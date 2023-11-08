using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using streamapi.Models;
using MongoDB.Driver;

namespace streamapi.services
{
    public class VideosService : IVideosService
    {
        private readonly IMongoCollection<Videos> _videos;

        public VideosService(IVideosStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _videos = database.GetCollection<Videos>(settings.VideosCollectionName);
        }
        public Videos Create(Videos videos)
        {
            _videos.InsertOne(videos);
            return videos;
        }

        public List<Videos> Get()
        {
            return _videos.Find(video => true).ToList();
        }

        public Videos Get(string id)
        {
            return _videos.Find(video => video.Id == id).FirstOrDefault();
        }

        public void Remove(string id)
        {
            _videos.DeleteOne(video => video.Id == id);
        }

        public void Update(string id, Videos videos)
        {
            _videos.ReplaceOne(video => video.Id == id, videos);
        }
    }
}