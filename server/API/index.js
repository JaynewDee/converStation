const curie = require("express").Router();

const { getEngines, postCompletion } = require("./fetch.js");
const urls = require("./urls.js");

const { get, post } = urls;

curie.get("/api/engines", async (req, response) => {
  try {
    await getEngines(get.engines).then((res) => {
      return response.send(res);
    });
  } catch (err) {
    console.error(err);
  }
  return new Error("Error @ GET route to CURIE \n Filename: API/index.js");
});

curie.post("/api/completion", async (req, response) => {
  const curiePrompt = req.body.prompt;

  try {
    await postCompletion(post.curieCompletion, curiePrompt).then((res) =>
      response.send(res)
    );
  } catch (err) {
    console.error(err);
  }
});

module.exports = curie;

// *** CREATE COMPLETION *** //
// POST

// https://api.openai.com/v1/engines/{engine_id}/completions

// Creates a new completion for the provided prompt and parameters

// Path parameters
// engine_id
// string
// Required
// The ID of the engine to use for this request

// Request body
// prompt
// string or array
// Optional
// Defaults to <|endoftext|>
// The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.

// Note that <|endoftext|> is the document separator that the model sees during training, so if a prompt is not specified the model will generate as if from the beginning of a new document.

// suffix
// string
// Optional
// Defaults to null
// The suffix that comes after a completion of inserted text.

// max_tokens
// integer
// Optional
// Defaults to 16
// The maximum number of tokens to generate in the completion.

// The token count of your prompt plus max_tokens cannot exceed the model's context length. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).

// temperature
// number
// Optional
// Defaults to 1
// What sampling temperature to use. Higher values means the model will take more risks. Try 0.9 for more creative applications, and 0 (argmax sampling) for ones with a well-defined answer.

// We generally recommend altering this or top_p but not both.

// top_p
// number
// Optional
// Defaults to 1
// An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.

// We generally recommend altering this or temperature but not both.

// n
// integer
// Optional
// Defaults to 1
// How many completions to generate for each prompt.

// Note: Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for max_tokens and stop.

// stream
// boolean
// Optional
// Defaults to false
// Whether to stream back partial progress. If set, tokens will be sent as data-only server-sent events as they become available, with the stream terminated by a data: [DONE] message.

// logprobs
// integer
// Optional
// Defaults to null
// Include the log probabilities on the logprobs most likely tokens, as well the chosen tokens. For example, if logprobs is 5, the API will return a list of the 5 most likely tokens. The API will always return the logprob of the sampled token, so there may be up to logprobs+1 elements in the response.

// The maximum value for logprobs is 5. If you need more than this, please contact support@openai.com and describe your use case.

// echo
// boolean
// Optional
// Defaults to false
// Echo back the prompt in addition to the completion

// stop
// string or array
// Optional
// Defaults to null
// Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.

// presence_penalty
// number
// Optional
// Defaults to 0
// Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.

// See more information about frequency and presence penalties.

// frequency_penalty
// number
// Optional
// Defaults to 0
// Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.

// See more information about frequency and presence penalties.

// best_of
// integer
// Optional
// Defaults to 1
// Generates best_of completions server-side and returns the "best" (the one with the lowest log probability per token). Results cannot be streamed.

// When used with n, best_of controls the number of candidate completions and n specifies how many to return – best_of must be greater than n.

// Note: Because this parameter generates many completions, it can quickly consume your token quota. Use carefully and ensure that you have reasonable settings for max_tokens and stop.

// logit_bias
// map
// Optional
// Defaults to null
// Modify the likelihood of specified tokens appearing in the completion.

// Accepts a json object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this tokenizer tool (which works for both GPT-2 and GPT-3) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.

// As an example, you can pass {"50256": -100} to prevent the <|endoftext|> token from being generated.

// user
// string
// Optional
// A unique identifier representing your end-user, which will help OpenAI to monitor and detect abuse.
// *** end section *** //

//

// *** RETRIEVE ENGINE *** //
// GET

// https://api.openai.com/v1/engines/{engine_id}

// Retrieves an engine instance, providing basic information about the engine such as the owner and availability.

// Path parameters
// engine_id
// string
// Required
// The ID of the engine to use for this request
// *** end section *** //

//

// *** LIST ENGINES *** //
// GET

// https://api.openai.com/v1/engines

// Lists the currently available engines, and provides basic information about each one such as the owner and availability.
// *** end section *** //

//

// *** CREATE EDIT *** //
// POST

// https://api.openai.com/v1/engines/{engine_id}/edits

// Creates a new edit for the provided input, instruction, and parameters

// Path parameters
// engine_id
// string
// Required
// The ID of the engine to use for this request

// Request body
// input
// string
// Optional
// Defaults to ''
// The input text to use as a starting point for the edit.

// instruction
// string
// Required
// The instruction that tells the model how to edit the prompt.

// temperature
// number
// Optional
// Defaults to 1
// What sampling temperature to use. Higher values means the model will take more risks. Try 0.9 for more creative applications, and 0 (argmax sampling) for ones with a well-defined answer.

// We generally recommend altering this or top_p but not both.

// top_p
// number
// Optional
// Defaults to 1
// An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.

// We generally recommend altering this or temperature but not both.
// *** end section *** //

//
