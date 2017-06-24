FROM node:8.1.2-alpine
MAINTAINER iredchuk (https://github.com/iredchuk/wiki-langlinks-api.git)
WORKDIR /usr/node_app
ENV NODE_ENV=production
ENV PORT=3000
COPY package.json package-lock.json .npmrc index.js /usr/node_app/
RUN ["npm", "install"]
COPY app/ /usr/node_app/app/
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]
