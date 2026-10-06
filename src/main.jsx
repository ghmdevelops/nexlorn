import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { initAnalytics, trackContactClicks } from './analytics.js'
import { mount } from './mount.js'
import { findRoute } from './routes.js'

const route = findRoute(window.location.pathname)
if (import.meta.env.DEV) document.title = route.title

mount(
  <StrictMode>
    <App route={route} />
  </StrictMode>,
)

initAnalytics()
trackContactClicks()
