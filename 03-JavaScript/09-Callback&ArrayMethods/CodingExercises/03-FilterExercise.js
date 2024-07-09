function validUserNames(usernames) {
    // your code here
    return usernames.filter(user => user.length < 10);
  }