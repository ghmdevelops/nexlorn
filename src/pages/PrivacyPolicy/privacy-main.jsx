import { StrictMode } from 'react';
import '../../index.css';
import { initAnalytics, trackContactClicks } from '../../analytics.js';
import { mount } from '../../mount.js';
import PrivacyPolicy from './PrivacyPolicy.jsx';

mount(
  <StrictMode>
    <PrivacyPolicy />
  </StrictMode>,
);

initAnalytics();
trackContactClicks();
