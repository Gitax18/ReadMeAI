// import 'fs';
const axios = require('axios');
const fs = require('fs');


exports.getData = async (template,code, description) => {
    const temp = `
    ${template}

    Here is the codesnippet : ${code} \n and here is the code description: ${description}

    Plese Generate Output in markdown code.
    `;

    console.log(temp)

    const options = {
        method: 'POST',
        url: 'https://open-ai21.p.rapidapi.com/conversationgpt35',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'e8460fc7acmsh6f7f2adc14ad7e2p1cc4ffjsn171edd349e19',
          'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
        },
        data: {
          messages: [
            {
              role: 'user',
              content: temp
            }
          ],
          web_access: false,
          stream: false
        }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
        console.error(error);
        return {BOT: 'Error occured in fetching data from API.'};
    } 
}

