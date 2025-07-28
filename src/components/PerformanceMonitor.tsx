import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

interface PerformanceMonitorProps {
  onMetricsReady?: (metrics: PerformanceMetrics) => void;
  enableConsoleLog?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsReady,
  enableConsoleLog = false
}) => {
  const metricsRef = useRef<PerformanceMetrics>({});
  const observerRef = useRef<PerformanceObserver | null>(null);

  useEffect(() => {
    const metrics = metricsRef.current;

    // Function to report metrics
    const reportMetrics = () => {
      if (onMetricsReady) {
        onMetricsReady({ ...metrics });
      }
      
      if (enableConsoleLog) {
        console.group('🚀 Performance Metrics');
        console.log('First Contentful Paint (FCP):', metrics.fcp?.toFixed(2) + 'ms');
        console.log('Largest Contentful Paint (LCP):', metrics.lcp?.toFixed(2) + 'ms');
        console.log('First Input Delay (FID):', metrics.fid?.toFixed(2) + 'ms');
        console.log('Cumulative Layout Shift (CLS):', metrics.cls?.toFixed(4));
        console.log('Time to First Byte (TTFB):', metrics.ttfb?.toFixed(2) + 'ms');
        console.groupEnd();
      }
    };

    // Web Vitals observer
    if ('PerformanceObserver' in window) {
      try {
        // Observe paint metrics (FCP, LCP)
        const paintObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'paint') {
              if (entry.name === 'first-contentful-paint') {
                metrics.fcp = entry.startTime;
              }
            } else if (entry.entryType === 'largest-contentful-paint') {
              metrics.lcp = entry.startTime;
            }
          }
        });

        paintObserver.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });

        // Observe layout shift (CLS)
        const layoutShiftObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          metrics.cls = clsValue;
        });

        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });

        // Observe first input delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-input') {
              metrics.fid = (entry as any).processingStart - entry.startTime;
            }
          }
        });

        fidObserver.observe({ entryTypes: ['first-input'] });

        observerRef.current = paintObserver;

      } catch (error) {
        console.warn('Performance Observer not fully supported:', error);
      }
    }

    // Get Navigation Timing metrics
    if ('performance' in window && window.performance.getEntriesByType) {
      const navigationEntries = window.performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigationEntries.length > 0) {
        const nav = navigationEntries[0];
        metrics.ttfb = nav.responseStart - nav.requestStart;
      }
    }

    // Report metrics after a delay to ensure all measurements are captured
    const timeoutId = setTimeout(reportMetrics, 3000);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [onMetricsReady, enableConsoleLog]);

  // This component doesn't render anything
  return null;
};

export default PerformanceMonitor;