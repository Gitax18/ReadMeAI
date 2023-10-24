# 🤖 ReadmeAI 📃
![Badge](https://i.ibb.co/996TVvG/Untitled-1-01.jpg)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)


## Overview

The README Generator is a platform that allows users to upload a single-file code and describe their project. The AI generates a Markdown code, which can be edited in real-time using a code editor, and the changes are previewed instantly.

## Navigation
- [🤖 ReadmeAI 📃](#-readmeai-)
  - [Overview](#overview)
  - [Navigation](#navigation)
  - [😎 Features](#-features)
  - [📂 File Structure (MVC)](#-file-structure-mvc)
  - [💻 Tech Stack](#-tech-stack)
  - [⚙️ Installation](#️-installation)
  - [🚀 Usage](#-usage)
  - [🔮 Features for next release.](#-features-for-next-release)
  - [🤝Support](#support)
  - [✍️ Authors](#️-authors)

## 😎 Features
- **AI-Powered Content**: It uses Google AI to generate meaningful and informative content for your README, including project description, usage, installation, and more.
  
- **Customization**: You can customize the generated content using a built in *editor* to include or exclude specific sections, ensuring your README reflects your project's unique needs.
  
- **Markdown Support**: The generated README files use Markdown, making it easy to format and style your project documentation.
  
- **User-Friendly Web Interface**: Access the generator through a user-friendly web interface, eliminating the need for manual setup.

## 📂 File Structure (MVC)

- 📁 **api/** : contains code file to connect to third party api's (Google PaLM 2) 
- 📁 **controllers/** : Contains all the business logic to execute on post/get requests. 
- 📁 **views/** : Contains files to render at client sides.
- 📁 **data/** : Contains the *'template'* which will hold the output template and *'output.md'* which will output markdown.
- 📁 **public/** : Contains client side css and scripts.
- 📁 **routes/** : File to handle routes and to call respective controller function on particular route.
- 📁 **uploads/** : This directory will hold files that server received from client side, and then deletes them once the session ends.
- 📃 **server.js** : This file is the main **express server**, this is the file that will execute on starting server. 

## 💻 Tech Stack

- 🚀 Node.js: Server-side runtime.
- 🌐 Express: Node.js framework.
- 🤖 Google PaLM API: Google Pathways Language Model is a 540 billion parameter transformer-based large language model. 
- 🎨 EJS: Templating engine to render and add dynamic content in your HTML at server.
- 🎨 CSS: Styling the HTML template.
- 💼 JavaScript: To add Interactivity in the frontend.

## ⚙️ Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Open your terminal and run:

```bash
    npm install
```

## 🚀 Usage

1. Change to the project directory.
2. Open your terminal and type the following command:

```bash
    npm start
```
3. The Application will run on [http://localhost:3000](http://localhost:3000)
***

**NOTE: If the project don't run properly and show crbug error in web console then follow following steps.**
1. Open VSCode an go to 'Run and Debug' menu in left sidebar.
2. Click on 'create a launch.json file' and select node.js in pop-up menu.
3. Now click on green triangular play icon on the top of same 'Run and Debug' sidebar.
4. Now go to [http://localhost:3000](http://localhost:3000)

## 🔮 Features for next release.

- GitHub Authorization to add repo rather than single file.
- More trained AI to generate readme for folders rather than file.
- Custom templates, User can defined what features/section they want in their readme.

## 🤝Support

If you encounter any issues or have questions, please feel free to [create an issue](https://github.com/Gitax18/readme-ai-generator/issues) on the repository. We're here to help!

## ✍️ Authors

- Gitanshu Sankhla (Backend Developer) - 
  
  [![GitHub-social](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Gitax18) [![LinkedIn-social](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/gitanshu-sankhla)
 [![Instagram-social](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/lazydeveloper18)


- Vijay Banjara (Frontend Developer) -  
 [![GitHub-social](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dev-tashvi) [![LinkedIn-social](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/hii-vijay-banjara/)
 [![Instagram-social](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/brrocode/)


- Harsh Kumar (Designer) -

   [![GitHub-social](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NebulaForged)
 [![Instagram-social](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/nebulaforgedesign/)
