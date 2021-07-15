FROM node:14
WORKDIR /src/app
COPY package*.json /src/app


RUN npm install
COPY . .
EXPOSE 3000


# WORKDIR /code
# COPY package.json package-lock.json /code/
# RUN npm ci
# COPY src /code/src