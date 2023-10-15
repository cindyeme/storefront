import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Sentry from "@sentry/vue";


const app = createApp(App)

Sentry.init({
  app,
  dsn: 'https://d542cad3f04398afda710adfbf5396c0@o4506048173637632.ingest.sentry.io/4506048177700864',
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
      routingInstrumentation: Sentry.vueRouterInstrumentation(router)
    }),
    new Sentry.Replay()
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

app.use(router)

app.mount('#app')
