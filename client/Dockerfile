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
# STAGE 2: Serve the App using Node 'serve'
# ==========================================
FROM node:20-alpine

WORKDIR /app
# Install 'serve' to serve static files
RUN npm install -g serve

# Copy only the built React files from STAGE 1
COPY --from=build /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
