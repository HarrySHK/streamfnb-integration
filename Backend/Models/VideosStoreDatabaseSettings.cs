using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace streamapi.Models
{
    public class VideosStoreDatabaseSettings : IVideosStoreDatabaseSettings
    {
               public string VideosCollectionName {get; set;} = String.Empty;
                   public string CategoriesCollectionName { get; set; } = String.Empty;
                   public string ContentCollection { get; set; } = String.Empty;
                   public string UserCollection { get; set; } = String.Empty;
                   public string ProducerCollection { get; set; } = String.Empty;
                   public string CelebsCollection { get; set; } = String.Empty;
                   public string EventCollection { get; set; } = String.Empty;
                   public string PollCollection { get; set; } = String.Empty;
        public string ConnectionString {get; set;} = String.Empty;
       public string DatabaseName {get; set;} = String.Empty;
    }
}