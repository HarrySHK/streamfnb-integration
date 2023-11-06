using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using streamapi.Models;
using streamapi1.Models;

namespace streamapi1.services
{
    public interface ICategoriesService
    {
        List<Categories> Get();
        Categories Get(string id);
        Categories Create(Categories videos);
        void Update(string id, Categories videos);
        void Remove(string id);
    }
}