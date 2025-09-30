FROM node:24.9.0-alpine3.21
RUN apk --no-cache add curl
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start"]