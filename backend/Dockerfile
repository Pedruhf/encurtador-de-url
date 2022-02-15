FROM node:14.17.5

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn

COPY . .
RUN yarn build

CMD ["yarn", "start"]
