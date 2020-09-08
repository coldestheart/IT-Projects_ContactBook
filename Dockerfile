FROM node:12.18-alpine
ENV APP_ROOT /web
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}
RUN npm i
RUN npm run build
CMD ["npm", "run", "host"]