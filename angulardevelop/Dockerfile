FROM node:8.5.0-alpine

LABEL MAINTAINER="damian knopp"
LABEL version="1.0"
LABEL description="build docker image for node and angular development"

# Create Application Directory
ENV WORKING_DIRECTORY /usr/share/angulardevelop
RUN mkdir -p $WORKING_DIRECTORY
WORKDIR $WORKING_DIRECTORY

# Install packages
ENV ANGULAR_CLI_VERSION=1.3.0
RUN apk update && \
    npm i -g @angular/cli@^${ANGULAR_CLI_VERSION} && \
    apk add git && \
    rm -rf /usr/share/man /tmp/* \
        /var/cache/apk/* \
        /usr/lib/node_modules/npm/man \
        /usr/lib/node_modules/npm/doc \
        /usr/lib/node_modules/npm/html 

EXPOSE 443

ENTRYPOINT ["/bin/sh"]