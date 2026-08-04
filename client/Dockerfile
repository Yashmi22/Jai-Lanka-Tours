# ==========================================
# STAGE 1: Build the React Application
# ==========================================
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ==========================================
# STAGE 2: Serve the App using Nginx
# ==========================================
FROM nginx:alpine

# Remove default nginx config and copy our custom one
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the built React files from STAGE 1 to Nginx's serving directory
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
