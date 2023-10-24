# Simple Calculator

A simple calculator built with JavaScript.

## Description

This project is a simple calculator that can perform basic mathematical operations. It has two input fields for the operands and one output field for the result. The calculator can perform addition, subtraction, multiplication, and division.

## Table of Contents

- [Installation](<#installation>)
- [Usage](<#usage>)
- [Code](<#code>)
- [Code Explanation](<#code-explanation>)
- [Contributing](<#contributing>)
- [License](<#license>)

<!-- -->

## Installation

To install the project, clone the repository to your local machine.

```
git clone https://github.com/your-username/simple-calculator.git
```

Once the repository is cloned, install the dependencies by running the following command.

```
npm install
```

## Usage

To use the calculator, open the index.html file in a web browser.

The calculator has two input fields for the operands and one output field for the result. To perform a calculation, enter the operands in the input fields and click on the corresponding operator button. The result will be displayed in the output field.

## Code

The code for the calculator is located in the `src` directory. The following are the main files in the project.

- `index.html`: The HTML file for the calculator.
- `index.js`: The JavaScript file for the calculator.
- `style.css`: The CSS file for the calculator.

<!-- -->

## Code Explanation

The calculator is built using the following JavaScript libraries.

- [jQuery](<https://jquery.com/>): A JavaScript library for DOM manipulation.
- [Math.js](<https://mathjs.org/>): A JavaScript library for mathematical calculations.

<!-- -->

The calculator has two input fields for the operands and one output field for the result. The following code snippet shows how the input fields are created.

```
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let output = document.getElementById("output");
```

The following code snippet shows how the buttons for the operators are created.

```
let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
```

The following code snippet shows how the event listeners for the buttons are added.

```
addButton.addEventListener("click", calculateResult);
subtractButton.addEventListener("click", calculateResult);
multiplyButton.addEventListener("click", calculateResult);
divideButton.addEventListener("click", calculateResult);
```

The following code snippet shows how the `calculateResult()` function is implemented. This function is responsible for performing the mathematical calculation and displaying the result in the output field.

```
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
```

## Contributing

Contributions to this project are welcome. Please follow the following guidelines when contributing.

- Fork the repository to your local machine.
- Create a new branch for your changes.
- Make your changes and commit them to your branch.
- Push your changes to your remote repository.
- Create a pull request to the main repository.

<!-- -->

## License

This project is licensed under the MIT License.

[![GitHub-social](<https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white>)](<https://github.com/>)<br>

[![LinkedIn-social](<https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white>)](<https://linkedin.com/>)<br>

[![Instagram-social](<https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white>)](<https://www.instagram.com/>)

