import {getGitHubUser} from "./api.js";

import {showLoading,showError,showUser} from "./ul.js";

const input = document.getElementById("usernameInput");

const button = document.getElementById("searchBtn");

const result = document.getElementById("result");

button.addEventListener("click",
  async function () {

    const username = input.value.trim();

    if (username === "") {
      showError(result,"請輸入 GitHub 使用者名稱");
      return;
    }

    try {
      showLoading(result);

      const user = await getGitHubUser(username);

      showUser(result,user);

      input.value = "";
    }
    catch (error) {
      showError(result,error.message);
    }

  }
);