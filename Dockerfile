FROM cypress/included:14.4.0

WORKDIR /e2e

COPY . .

RUN npm ci

CMD ["npm", "run", "cy:run"]