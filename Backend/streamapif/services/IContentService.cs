using System;
using System.Collections.Generic;
using streamapif.Models;

namespace streamapif.Services
{
    public interface IContentService
    {
        Content Create(Content content);
        List<Content> Get();
        Content Get(string id);
        void Remove(string id);
        void Update(string id, Content content);
    }
}
