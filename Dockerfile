FROM node:19-alpine as build
RUN apk add --no-cache \
  python3 \
  g++ \
  gcc \
  make \
  git \
  autoconf \
  automake \
  lcms2-dev \
  libpng-dev \
  musl-dev \
  libtool \
  nasm \
  tiff \
  jpeg \
  zlib \
  zlib-dev \
  file \
  pkgconf \
  libc6-compat \
  build-base

# ENV NODE_OPTIONS="--max-old-space-size=3072"
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /cache

COPY . /cache

RUN date '+%s' > ./time.env

RUN pnpm i --frozen-lockfile
RUN pnpm build:packages
RUN pnpm build:micro
RUN pnpm build:merge

FROM nginx:1.23-alpine

COPY --from=build /cache/build /usr/share/nginx/html
COPY ./nginx-fill.sh /nginx-fill.sh

ADD ./docker/nginx.conf /etc/nginx/nginx.conf
ADD ./docker/frontend.template.conf /etc/nginx/templates/frontend.conf.template

RUN rm -rf /cache

RUN chown -R nginx:nginx /usr/share/nginx/html
RUN chmod +x /nginx-fill.sh

ENTRYPOINT [ "/nginx-fill.sh" ]
CMD ["nginx"]
