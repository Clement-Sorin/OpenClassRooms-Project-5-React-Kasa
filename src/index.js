import React from 'react';
import AppRoutes from './app/Routes';
import { createRoot } from 'react-dom/client';
import './css/styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <AppRoutes />
)

