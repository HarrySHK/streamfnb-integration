using System;
using System.Collections.Generic;
using streamapif.Models;

namespace streamapif.services
{
    public interface IUserService
    {
        User Create(User user);
        List<User> Get();
        User Get(string id);
        void Remove(string id);
        void Update(string id, User user);
    }
}
