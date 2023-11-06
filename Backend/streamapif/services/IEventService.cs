using System;
using System.Collections.Generic;
using streamapi.Models;
using streamapif.Models;

namespace streamapif.services
{
    public interface IEventService
    {
        Event Create(Event ev);
        List<Event> Get();
        Event Get(string id);
        void Remove(string id);
        void Update(string id, Event ev);
    }
}
