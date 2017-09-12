FROM node:8.4.0-alpine

MAINTAINER damian knopp
LABEL version="1.0"
LABEL description="build docker image for node and swagger development"

# Create Application Directory
ENV WORKING_DIRECTORY /usr/share/swaggerdevelop
RUN mkdir -p $WORKING_DIRECTORY
WORKDIR $WORKING_DIRECTORY

# Install packages
ENV SWAGGER_CLI_VERSION=latest
RUN apk update && \
    npm i -g swagger@${SWAGGER_CLI_VERSION} && \
    apk add git && \
    rm -rf /usr/share/man /tmp/* \
        /var/cache/apk/* \
        /usr/lib/node_modules/npm/man \
        /usr/lib/node_modules/npm/doc \
        /usr/lib/node_modules/npm/html 

EXPOSE 443
EXPOSE 80
EXPOSE 9898
EXPOSE 10010

ENTRYPOINT ["/bin/sh"]