FROM node:alpine
WORKDIR /a
EXPOSE 8080
COPY ./ ./
RUN npm install
CMD ["npm", "start"]

