const axios = require('axios').default;
const API_KEY = process.env.OPENAI_API_KEY;


console.log(API_KEY)

const getEngines = async (url) => {
    const engineList = await axios({
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        }
    })
    return engineList.data;
}

const getInstance = async (url) => {
    const instance = await axios({
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        }
    })
    return instance.data;
}

const postCompletion = async (url, prompt) => {
    
    const botResponse = await axios({
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        },
        data: {
            "prompt": `${prompt}`,
            "max_tokens": 36,
            "temperature": 0.9,
            "n": 1,
            "echo": true
        }
    })
    return botResponse.data
}

module.exports = {
    getEngines,
    postCompletion
}