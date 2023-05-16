# ESM-DB

ESM database repository using postgreSQL

## Requirements

- [Node.js][https://nodejs.org]
- [NPM][https://npmjs.org]
- Docker + docker-compose

## Quick Start

- Clone repo
- Run `npm install`
- Run `docker-compose up -d`
- Run `npm run migrate` to create tables

## Usage

- To seed database, run `npx knex seed:run --specific=<SEED_FILENAME>`
- To create migration file, run `npx knex migrate:make <create|alter_table_name>`