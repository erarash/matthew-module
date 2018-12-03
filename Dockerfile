FROM node:8

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install

COPY . .

EXPOSE 2000

ARG DBHOSTNAME
ENV DBHOSTNAME ec2-13-58-68-15.us-east-2.compute.amazonaws.com

ARG PORT
ENV PORT 2000

RUN npm run build

CMD [ "npm", "start"]
