# Simple Calculator

[![GitHub-social](<https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white>)](<https://github.com/>)<br>

[![LinkedIn-social](<https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white>)](<https://linkedin.com/>)<br>

[![Instagram-social](<https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white>)](<https://www.instagram.com/>)

A simple calculator in JavaScript programming language.

## Description

This project is a simple calculator that can perform mathematical operations like addition, subtraction, multiplication, and division. It is built using the JavaScript programming language.

## Table of Contents

- [Installation](<#installation>)
- [Usage](<#usage>)
- [Code](<#code>)
- [Code Explanation](<#code-explanation>)
- [Contributing](<#contributing>)
- [License](<#license>)

<!-- -->

## Installation

To install this project, you will need to have the following dependencies installed:

- Node.js
- NPM

<!-- -->

Once you have the dependencies installed, you can install the project by running the following command:

<div class="pieces-code-wrapper" style="text-align: left; margin-top: 10px;"><precode language="" precodenum="0"></precode><div class="pieces-btn-wrapper" style="border: none; display: flex; flex-direction: row; opacity: 0; width: auto; transition: opacity 0.3s ease-out 0s; height: 26px; margin-top: 10px; margin-bottom: 10px;"><button class="pieces-btn pieces-copy-and-save" style="width: auto; font-size: 12px; border: 1px solid rgb(33, 33, 33); border-radius: 16px; margin-right: 4px; padding: 4px 6px 4px 4px; line-height: normal; height: fit-content; cursor: pointer; user-select: none; display: flex; align-items: center; background-color: rgb(33, 33, 33); color: rgb(255, 255, 255);"><img src="https://storage.googleapis.com/pieces-web-extensions-cdn/pieces.png" class="pieces-logo" style="margin: 0px 4px 0px 0px; border-radius: 50%; filter: none; float: left; width: 16px; height: 16px;"><span class="pieces-btn-text">Copy and Save</span></button><button class="pieces-btn pieces-share" style="width: auto; font-size: 12px; border: 1px solid rgb(33, 33, 33); border-radius: 16px; margin-right: 4px; padding: 4px 6px 4px 4px; line-height: normal; height: fit-content; cursor: pointer; user-select: none; display: flex; align-items: center; background-color: rgb(33, 33, 33); color: rgb(255, 255, 255);"><img src="https://storage.googleapis.com/pieces-web-extensions-cdn/link.png" class="pieces-logo" style="margin: 0px 4px 0px 0px; border-radius: 50%; filter: none; float: left; width: 16px; height: 16px;"><span class="pieces-btn-text">Share</span></button><button class="pieces-btn pieces-ask-copilot" style="width: auto; font-size: 12px; border: 1px solid rgb(33, 33, 33); border-radius: 16px; margin-right: 4px; padding: 4px 6px 4px 4px; line-height: normal; height: fit-content; cursor: pointer; user-select: none; display: flex; align-items: center; background-color: rgb(33, 33, 33); color: rgb(255, 255, 255);"><img src="https://storage.googleapis.com/pieces-web-extensions-cdn/copilot.png" class="pieces-logo" style="margin: 0px 4px 0px 0px; border-radius: 50%; filter: none; float: left; width: 16px; height: 16px;"><span class="pieces-btn-text">Ask Copilot</span></button></div></div>

## Usage

To use this project, you can run the following command:

<div class="pieces-code-wrapper" style="text-align: left; margin-top: 10px;"><precode language="" precodenum="1"></precode><div class="pieces-btn-wrapper" style="border: none; display: flex; flex-direction: row; opacity: 0; width: auto; transition: opacity 0.3s ease-out 0s; height: 26px; margin-top: 10px; margin-bottom: 10px;"><button class="pieces-btn pieces-copy-and-save" style="width: auto; font-size: 12px; border: 1px solid rgb(33, 33, 33); border-radius: 16px; margin-right: 4px; padding: 4px 6px 4px 4px; line-height: normal; height: fit-content; cursor: pointer; user-select: none; display: flex; align-items: center; background-color: rgb(33, 33, 33); color: rgb(255, 255, 255);"><img src="https://storage.googleapis.com/pieces-web-extensions-cdn/pieces.png" class="pieces-logo" style="margin: 0px 4px 0px 0px; border-radius: 50%; filter: none; float: left; width: 16px; height: 16px;"><span class="pieces-btn-text">Copy and Save</span></button><button class="pieces-btn pieces-share" style="width: auto; font-size: 12px; border: 1px solid rgb(33, 33, 33); border-radius: 16px; margin-right: 4px; padding: 4px 6px 4px 4px; line-height: normal; height: fit-content; cursor: pointer; user-select: none; display: flex; align-items: center; background-color: rgb(33, 33, 33); color: rgb(255, 255, 255);"><img src="https://storage.googleapis.com/pieces-web-extensions-cdn/link.png" class="pieces-logo" style="margin: 0px 4px 0px 0px; border-radius: 50%; filter: none; float: left; width: 16px; height: 16px;"><span class="pieces-btn-text">Share</span></button><button class="pieces-btn pieces-ask-copilot" style="width: auto; font-size: 12px; border: 1px solid rgb(33, 33, 33); border-radius: 16px; margin-right: 4px; padding: 4px 6px 4px 4px; line-height: normal; height: fit-content; cursor: pointer; user-select: none; display: flex; align-items: center; background-color: rgb(33, 33, 33); color: rgb(255, 255, 255);"><img src="https://storage.googleapis.com/pieces-web-extensions-cdn/copilot.png" class="pieces-logo" style="margin: 0px 4px 0px 0px; border-radius: 50%; filter: none; float: left; width: 16px; height: 16px;"><span class="pieces-btn-text">Ask Copilot</span></button></div></div>

This will start the calculator and you will be able to enter your mathematical expressions.

## Code

The code for this project is located in the `src` directory. The following is a list of the files in the `src` directory:

- `index.js`: This file contains the main entry point for the project.
- `calculator.js`: This file contains the logic for the calculator.

<!-- -->

## Code Explanation

The following is an explanation of the code for the calculator:

The `index.js` file contains the main entry point for the project. It imports the `calculator.js` file and calls the `calculate()` function. The `calculate()` function takes an expression as a parameter and returns the result of the expression.

The `calculator.js` file contains the logic for the calculator. It defines a function called `calculate()` that takes an expression as a parameter and returns the result of the expression. The `calculate()` function uses the `eval()` function to evaluate the expression and returns the result.

## Contributing

Contributions to this project are welcome. Please follow the following guidelines when contributing:

- Create a new branch for each feature or bug fix.
- Write unit tests for your changes.
- Submit a pull request with your changes.

<!-- -->

## License

This project is licensed under the MIT License.

