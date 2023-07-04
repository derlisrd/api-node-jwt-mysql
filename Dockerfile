FROM alpine:3.17

ENV NODE_VERSION 16.20.1

WORKDIR /app


COPY . .

RUN npm install

EXPOSE 3030

CMD ["npm","run dev"]