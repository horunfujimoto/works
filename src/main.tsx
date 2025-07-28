//src\main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/design-system.css'
import './styles/animations.css'
import './styles/tetris.css'
import './styles/responsive.css'
import './styles/accessibility.css'
import './styles/performance.css'
import App from './App.tsx'
import PerformanceMonitor from './components/PerformanceMonitor'
import 'bootstrap/dist/css/bootstrap.min.css';

// Performance monitoring in development
const isProduction = import.meta.env.PROD;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {!isProduction && (
      <PerformanceMonitor 
        enableConsoleLog={true}
        onMetricsReady={(metrics) => {
          // Send metrics to analytics service in production
          console.info('📊 Performance metrics collected:', metrics);
        }}
      />
    )}
  </StrictMode>,
)
