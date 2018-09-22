const expect = require("expect");

const { Users } = require("./users");

describe("Users", () => {
  it("shoud add new users", () => {
    var users = new Users();
    var user = {
      id: "3123",
      name: "rik",
      room: "the office fans"
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });
});
