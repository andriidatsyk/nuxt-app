import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    video: false,
    baseUrl: 'http://localhost:3000/',
    env: {
      URL: 'http://localhost:3000/',
    },
  },
})
