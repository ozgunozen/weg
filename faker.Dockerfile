FROM node:20-alpine

RUN apk add --no-cache git

WORKDIR /workdir

COPY ./schema.graphql ./

EXPOSE 9002

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN git clone https://github.com/graphql-kit/graphql-faker.git && \
    cd graphql-faker && npm i && npm run build

ENTRYPOINT ["node", "/workdir/graphql-faker/dist/index.js", "/workdir/schema.graphql"]