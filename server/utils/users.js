class Users {
  constructor(){
    this.users = [];
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUsers(room){
    let users = this.users.filter((user) => user.room === room);
    return users;
  }

  addUser(id, name, room){
    let user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id){
    let user = this.getUser(id);
    if(user)
      this.users = this.users.filter((user) => user.id !== id);
    return user;
  }
}

module.exports = {Users};