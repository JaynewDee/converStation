const axios = require('axios').default;
const OPENAI_API_KEY="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"



const getEngines = async (url) => {
    const engineList = await axios({
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
        }
    })
    return engineList.data;
}

const getInstance = async (url) => {
    const instance = axios({
        method: 'get',
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
        }
    })
    return instance.data;
}

const postCompletion = async (url) => {
    const botResponse = axios({
        method: 'post',
        url: url,
        headers: {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            }
        },
        body: {
            "prompt": "Say this is a test",
            "max_tokens": 11,
            "temperature": 0.9,
            "n": 1,
            "echo": true,
            "stop": '\n'
        }
    })
    return botResponse.data
}

module.exports = {
    getEngines,
    postCompletion
}