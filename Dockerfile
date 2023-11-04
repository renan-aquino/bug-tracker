FROM node:20

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

ENV HOSTNAME 0.0.0.0

CMD ["npm", "start"]