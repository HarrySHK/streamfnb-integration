using System;
using System.Collections.Generic;
using System.Linq;
using streamapif.Models;
using MongoDB.Driver;
using streamapi.Models;

namespace streamapif.Services
{
    public class ContentService : IContentService
    {
        private readonly IMongoCollection<Content> _content;

        public ContentService(IVideosStoreDatabaseSettings settings, IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _content = database.GetCollection<Content>(settings.ContentCollection);
        }

        public Content Create(Content content)
        {
            try
            {
                _content.InsertOne(content);
                return content;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error creating content: {ex.Message}");
            }
        }

        public List<Content> Get()
        {
            try
            {
                return _content.Find(c => true).ToList();
            }
            catch (Exception ex)
            {
                throw new Exception($"Error retrieving content: {ex.Message}");
            }
        }

        public Content Get(string id)
        {
            try
            {
                return _content.Find(c => c.Id == id).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw new Exception($"Error retrieving content: {ex.Message}");
            }
        }

        public void Remove(string id)
        {
            try
            {
                _content.DeleteOne(c => c.Id == id);
            }
            catch (Exception ex)
            {
                throw new Exception($"Error removing content: {ex.Message}");
            }
        }

        public void Update(string id, Content content)
        {
            try
            {
                _content.ReplaceOne(c => c.Id == id, content);
            }
            catch (Exception ex)
            {
                throw new Exception($"Error updating content: {ex.Message}");
            }
        }
    }
}
