FROM alpine as builder

WORKDIR /home/site
COPY . .

RUN apk --no-cache add npm \
    && npm install --production \
    && npm run build

FROM nginx:alpine

COPY --from=builder /home/site/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

