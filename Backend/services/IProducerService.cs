using System;
using System.Collections.Generic;
using streamapi.Models;
using streamapif.Models;

namespace streamapif.services
{
    public interface IProducerService
    {
        Producer Create(Producer producer);
        List<Producer> Get();
        Producer Get(string id);
        void Remove(string id);
        void Update(string id, Producer producer);
    }
}
