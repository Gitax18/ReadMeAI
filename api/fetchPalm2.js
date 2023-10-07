
const { TextServiceClient } =
  require("@google-ai/generativelanguage").v1beta2;

const { GoogleAuth } = require("google-auth-library");

const fs = require("fs");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyBWBnCwyElOimCCRk3osxShW_cJCqdHCeQ";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

exports.getData2 = async (template, code, description) => {
    const prompt = `
    ${template}

    Here is the codesnippet : ${code} \n and here is the code description: ${description}

    Plese Generate Output in markdown code.
    `;

    // client.generateText({
    //     model: MODEL_NAME,
    //     prompt: {
    //         text: prompt,
    //     },
    // })
    // .then((result) => {
    //     const data = JSON.stringify(result, null, 2);
    //     const output = (JSON.parse(data))[0]['candidates'][0]['output'].slice(3).slice(0, -3);
    //     console.log('output is : ',output);
    //     return output;
    // });

    // using async await
    const response = await client.generateText({
        model: MODEL_NAME,
        prompt: {
            text: prompt,
        },
    });

    const data = JSON.stringify(response, null, 2);
    const output = (JSON.parse(data))[0]['candidates'][0]['output'].slice(3).slice(0, -3);
    console.log('output is : ',output);
    return output;
};