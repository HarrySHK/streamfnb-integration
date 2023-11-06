using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using streamapi.Models;

namespace streamapi.services
{
    public interface IVideosService
    {
        List<Videos> Get();
        Videos Get(string id);
        Videos Create(Videos videos);
        void Update(string id, Videos videos);
        void Remove(string id);
    }
}