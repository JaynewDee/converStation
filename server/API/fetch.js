const axios = require('axios').default;
const OPENAI_API_KEY = "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"



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
    const instance = await axios({
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
    
        const botResponse = await axios({
            method: 'post',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            data: {
                "prompt": "Tell me a joke about chickens",
                "max_tokens": 42,
                "temperature": 0.9,
                "n": 1,
                "echo": true
            }
        })
    

    console.log(botResponse.data.choices)
    return botResponse.data.choices
}

module.exports = {
    getEngines,
    postCompletion
}