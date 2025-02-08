# MUST BE RUN AT THE ROOT OF THE REPOSITORY
# CHECK: https://stackoverflow.com/a/34300129

FROM python:3.13.1-alpine3.21 AS build

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY docs /app/docs
COPY mkdocs.yml /app

WORKDIR /app
RUN python3 -m mkdocs build --site-dir /site

FROM nginx:1.27.4-alpine

COPY --from=build /site /usr/share/nginx/html
EXPOSE 80