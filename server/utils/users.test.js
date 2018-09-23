const expect = require("expect");

const {
  Users
} = require("./users");

describe("Users", () => {
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id : '1',
      name: 'mike',
      room: 'Node Course'
    }, {
      id : '2',
      name: 'jen',
      room: 'React Course'
    }, {
      id : '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it("should add new users", () => {
    var users = new Users();
    var user = {
      id: "3123",
      name: "rik",
      room: "the office fans"
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });
  it('should remove a user',()=>{
    var user=users.removeUser('1');
    expect(user.id).toBe('1');
    expect(users.users[0].id).toBe('2');
  });

  it('should not remove a user',()=>{
    var initialLength=users.users.length;
    var user=users.removeUser('33');
    expect(user).toBe(undefined);
    expect(users.users.length).toBe(initialLength);
  });
  it('should find user',()=>{
    var user=users.getUser('2');
    expect(user).toEqual({
      id : '2',
      name: 'jen',
      room: 'React Course'
    });
  });
  it('should not find user',()=>{
    var user=users.getUser('99');
    expect(user).toBe(undefined);
  });

  it('should return names for node course',()=>{
    var userList=users.getUserList('Node Course');
    expect(userList).toEqual(['mike', 'Julie']);
  });
  it('should return names for react course',()=>{
    var userList=users.getUserList('React Course');
    expect(userList).toEqual(['jen']);
  });
});
