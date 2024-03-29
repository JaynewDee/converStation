const axios = require("axios").default;
const API_KEY = "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";

const getEngines = async (url) => {
  const engineList = await axios({
    method: "get",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`
    }
  });
  return engineList.data;
};

const getInstance = async (url) => {
  const instance = await axios({
    method: "get",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`
    }
  });
  return instance.data;
};

const postCompletion = async (url, prompt) => {
  const botResponse = await axios({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`
    },
    data: {
      prompt: `${prompt}`,
      max_tokens: 36,
      temperature: 0.9,
      n: 1,
      echo: true
    }
  });
  return botResponse.data;
};

module.exports = {
  getEngines,
  postCompletion
};
