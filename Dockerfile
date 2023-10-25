# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port your app runs on
EXPOSE 3333

# Specify the command to run your application
CMD [ "npm", "start"]
