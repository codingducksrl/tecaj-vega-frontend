FROM node:lts

WORKDIR /app

COPY . .

COPY .docker/init.sh /init.sh
RUN chmod +x /init.sh

ARG UID
ARG GID

RUN mkdir -p /.npm
RUN chown -R $UID:$GID "/.npm"


CMD ["/init.sh"]