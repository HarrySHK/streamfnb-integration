using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace streamapi.Models
{
    public interface IVideosStoreDatabaseSettings
    {
        string VideosCollectionName {get; set;}
        string CategoriesCollectionName { get; set; }
        string ContentCollection { get; set; }
        string UserCollection { get; set; }
        string ProducerCollection { get; set; }
        string CelebsCollection { get; set; }
        string EventCollection { get; set; }
        string PollCollection { get; set; }
        string ConnectionString {get; set;}
        string DatabaseName {get; set;}
    }
}