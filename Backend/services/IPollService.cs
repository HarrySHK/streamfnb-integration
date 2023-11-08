using System.Collections.Generic;
using streamapi.Models;
using streamapif.Models;

namespace streamapif.services
{
    public interface IPollService
    {
        Poll Create(Poll poll);
        List<Poll> Get();
        Poll Get(string id);
        void Remove(string id);
        void Update(string id, Poll poll);
    }
}
