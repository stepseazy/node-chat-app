class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    var user = {
      id,
      name,
      room
    };
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    var returnUser = this.getUser(id);
    var index = this.users.indexOf(returnUser);

    if (index > -1) {
      returnUser = this.users[index];
      this.users.splice(index, 1);
    }
    return returnUser;
  }
  getUser(id) {
    return this.users.filter(user => user.id === id)[0];
  }
  getUserList(room) {
    var users = this.users.filter(user => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {
  Users
};
