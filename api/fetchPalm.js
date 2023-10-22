const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;

const { GoogleAuth } = require("google-auth-library");


const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyBWBnCwyElOimCCRk3osxShW_cJCqdHCeQ";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});


exports.getData = async (template, code, description) => {
    const prompt = `
    ${template}

    Here is the codesnippet : ${code.slice(0,-1)} \n and here is the code description: ${description.slice(0,-1)}

    Please Generate Output in GitHub Flavored Markdown output and to create list in markdown use this format '- 1', '- 2', etc.
    `;

    const response = await client.generateText({
        model: MODEL_NAME,
        prompt: {
            text: prompt,
        },
    });

    const data = JSON.stringify(response, null, 2);
    const output = (JSON.parse(data))[0]['candidates'][0]['output'].slice(3).slice(0, -3);
    return output;
};