$(document).ready(function () {
            var api_key = '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'; // Replace with your OpenAI API key

            $("#myform").submit(function (e) {
                e.preventDefault();

                var fileInput = $("#codebox")[0];
                var desc = $("#description").val();
                var file = fileInput.files[0];

                if (file) {
                    var reader = new FileReader();

                    reader.onload = function (event) {
                        var fileContents = event.target.result;

                        generator(fileContents, desc);
                        // Display the file contents or process it as needed
                        $('.output').text(fileContents);
                    };
                    reader.readAsText(file);
                }
            });

            function generator(value, desc = "") {
                var apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions'; // Replace with your API endpoint
                var apiKey = api_key;

                var headers = {
                    'Authorization': 'Bearer ' + apiKey,
                    'Content-Type': 'application/json'
                };

                // Prepare the request data as a JSON object
                var requestData = {
                    'text': value + desc,
                    // Add any other parameters required by the API
                };

                // Make the API call using jQuery's AJAX function
                $.ajax({
                    url: apiUrl,
                    type: 'POST', // Change to GET or other HTTP method as needed
                    headers: headers,
                    data: JSON.stringify(requestData),
                    success: function (response) {
                        // Handle the API response here
                        console.log('API Response:', response);
                    },
                    error: function (xhr, status, error) {
                        // Handle any errors that occur during the API call
                        console.error('API Error:', error);
                    }
                });
            }
        })