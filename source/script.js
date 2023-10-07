$(document).ready(function () {
  var api_key = "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"; // Replace with your OpenAI API key

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
        $(".output").text(fileContents);
      };
      reader.readAsText(file);
    }
  });

  function generator(value, desc = "") {
    console.log(value + desc);
    const MODEL_NAME = "models/text-bison-001";
    const API_KEY = "AIzaSyBWBnCwyElOimCCRk3osxShW_cJCqdHCeQ";
    const GOOGLE_AI_API_ENDPOINT =
                            "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key="+API_KEY;
    const prompt =  `
    You are an expert in writing GitHub project READMEs and Markdown files.

    Generate a GitHub README for the following Python stack project,
    describe each function and the logic behind it using proper paragraphs and
    use proper headings with different heading tags and bullet points
    to describe the functionality of each function and logic and
    explain each comment in the above provided code and return .md code as output.\n ${value}`;
    const requestdata = {
        temperature: 1.0,
        candidateCount: 2,
        model: MODEL_NAME,
        prompt: prompt,
        max_tokens: 200, // Adjust max_tokens as needed
        n: 1, // Adjust n as needed
        stop: ["\n"], // Stop generation at newlines
        };

    $.ajax({
      url: GOOGLE_AI_API_ENDPOINT,
      type: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(requestdata),
      success: function (result) {
        const output = result.choices[0].text;
        console.log(output)
      },
      error: function (error) {
        console.error("Error generating text:", error);
      },
    });
  }
});
