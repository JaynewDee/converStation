import React, { useState } from "react";
const axios = require("axios").default;



const GetOne: React.FC = (props: { onClick: any}) => {
  const [prompt, setPrompt] = useState("");
  const [roboReply, setReply] = useState("");

  console.log(prompt);
  console.log(roboReply);

  let bodyPrompt = "Tell me a joke about airplanes.";
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await axios({
        method: 'post',
        url: '/api/completion',
        data: {
            prompt: bodyPrompt
        }
    }).then((data) => {
        // Strip newlines from relevant prompt/response data
        let choices = data.data.choices[0].text.replace(/(\r\n|\n|\r)/gm, " ");
        // Transform json string into manageable object
        let promptObject = JSON.parse(data.config.data)
        // Extract string value of prompt key in object
        let textOnly = promptObject.prompt;
        // Replace any occurences of the prompt inside the entire text string,
            // storing only the AI's response
        let replyOnly = choices.replace(textOnly, "")

        // Store final values in component state, to pass to parents
        setPrompt(promptObject)
        setReply(replyOnly)
    })
  };


  return (
    <div></div>
  );
};

export default GetOne;
