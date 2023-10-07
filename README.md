# README.md Generator with AI and GitHub Integration

![Project Logo](https://media.giphy.com/media/dxn6fRlTIShoeBr69N/giphy.gif)

## Overview

The README.md Generator with AI and GitHub Integration is a web-based tool designed to streamline the process of maintaining and updating your project's README file. With this tool, you no longer need to manually update your README.md file every time you make changes to your project. Instead, this generator leverages the power of AI to automatically update and enhance your README file based on your project's latest information and activity on GitHub.

## Libraries Used

- google-auth : To authorise PALM AI api with secret key
- @google-ai/generativelanguage : Utility library for the PALM AI
- ejs : To create template for the dynamic HTML
- express : For creating Backend
- showdown : To work with .md and .html and conversions between them.

## Issues

Check repo [issues](https://github.com/Gitax18/readme-ai-generator/issues) here:

- Currently issue is with the incoming form data.

## Installation Guide

**Node.js must be installed in your local machine**

<br>
<br>

- #### For New Contributors
1.Fork the Repository
2.Clone it to your Local machine 
3.Change to project directory

```bash
    cd readme-ai-generator/
```

4.Switch current branch to firstMerge branch

```bash
    git switch firstMerege
```

5.Install the dependencies

```bash
    npm install
```

6.Start the server

```bash
    npm start
```

7.Then the server will be start at [localhost:3000](http://localhost:3000/)

<br>
<br>

- #### For Old Contributors (Already Cloned)

1.Pull the New Data

```bash
    git pull origin main
```

3.Switch current branch to firstMerge branch

```bash
    git switch firstMerge
```

4.Reinstall the dependencies

```bash
    npm install
```

5.Start the server

```bash
    npm start
```

6.Then the server will be start at [localhost:3000](http://localhost:3000/)

## Usage Guide
Since there is issue with the form upload please don't upload any file and add space in the description input and click generate button.
You will see the markdown file content as html output and to see markdown file:

1. go to project directory.
2. go to data.
3. open output\.md

## Features

- **Automatic README Updates**: The generator automatically updates your README.md file with the latest project information.
- **AI-Powered Content**: It uses AI to generate meaningful and informative content for your README, including project description, usage, installation, and more.
- **GitHub Integration**: It seamlessly integrates with your GitHub repository to retrieve data like commit activity, issue status, and more.
- **Customization**: You can customize the generated content to include or exclude specific sections, ensuring your README reflects your project's unique needs.
- **Markdown Support**: The generated README files use Markdown, making it easy to format and style your project documentation.
- **User-Friendly Web Interface**: Access the generator through a user-friendly web interface, eliminating the need for manual setup.

## Customization

The README.md Generator web interface allows you to customize the generated content by modifying the generated content. You can specify which sections to include, customize the formatting, and adjust the AI content generation settings directly through the web interface.

## Authors

- [Gitanshu Sankhla](https://github.com/Gitax18)
- [Vijay Banjara](https://github.com/dev-tashvi)

## Support

If you encounter any issues or have questions, please feel free to [create an issue](https://github.com/Gitax18/readme-ai-generator/issues) on the repository. We're here to help!

Happy coding! 🚀
