FROM node:20-alpine

RUN apk add --no-cache git

# Кладём текущий проект внутрь контейнера в /mam/bog/bhelper
WORKDIR /mam
RUN mkdir -p /mam/bog/bhelper
COPY . /mam/bog/bhelper

RUN npm exec mam /bog/bhelper

EXPOSE 9080

# http://localhost:9080/bog/bhelper/app/-/test.html
# 
# https://best-online-games.github.io/bhelper/
