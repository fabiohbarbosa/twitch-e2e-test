Twitch E2E test
=====================

## Links:
- [Dashboard](https://dashboard.cypress.io/#/projects/3zzwmr/)

## NVM
Change your node version to a project current node version.

`nvm use`

## Local Test
`npm run cy:run`

## Test and report to dashbboard (it has been using over pipeline)
`npm run cy:run:record`

## Environment Variables

**CI/CD Variables**

- CYPRESS_RECORD_KEY: Cypress record key to store test reports into the [dashboard](https://dashboard.cypress.io/#/projects/3zzwmr/)
