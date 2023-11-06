using System;
using System.Collections.Generic;
using streamapi.Models;

namespace streamapif.services
{
    public interface ICelebsService
    {
        Celebs Create(Celebs celeb);
        List<Celebs> Get();
        Celebs Get(string id);
        void Remove(string id);
        void Update(string id, Celebs celeb);
    }
}
