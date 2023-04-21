FROM webdevops/php-nginx:7.4

RUN apt-get update && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs

RUN node -v
RUN npm -v