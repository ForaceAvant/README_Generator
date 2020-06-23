const axios = require("axios");
const fs = require("fs");

const api = {
  getUser(username) {
    axios({
      method: 'get',
      url: ' https://api.github.com/search/users?q=' + username
    })
      .then(function (response) {
        console.log(response.data);
        userInfo = response.data.items[0];

        fs.appendFileSync("README.md", `![${userInfo.login}](${userInfo.avatar_url})`, (err) => {
          if (err) throw err;
        })
      })
      .catch(function (err) {
        if (err) throw err;
      });
  }
};

module.exports = api;
