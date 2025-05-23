FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
WORKDIR /var/www/html
RUN touch home.html
RUN echo "Hi I am Prashant & you" > home.html
CMD ["nginx", "-g", "daemon off;"]

