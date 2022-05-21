const urlsObj = {
    get: {
        engines: 'https://api.openai.com/v1/engines',
        textCurie: 'https://api.openai.com/v1/engines/text-curie-001'
    },
    post: {
        curieCompletion: 'https://api.openai.com/v1/engines/text-curie-001/completions'
    }
}

module.exports = urlsObj;