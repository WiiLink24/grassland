# MUST BE RUN AT THE ROOT OF THE REPOSITORY
# CHECK: https://stackoverflow.com/a/34300129

FROM python:3.13.1-alpine3.21 AS build

COPY ./projects/documentation/requirements.txt .
RUN pip3 install -r requirements.txt

WORKDIR /app
COPY . .

RUN python3 -m mkdocs build --site-dir /site

FROM nginx:latest

WORKDIR /usr/share/nginx/html
COPY --from=build /site /usr/share/nginx/html
EXPOSE 80