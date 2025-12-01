/**
 * Demo Mode Utilities
 * Provides functionality to detect and manage demo mode for presentations
 */

export function isDemoMode(): boolean {
  if (typeof window === 'undefined') return false;
  const params = new URLSearchParams(window.location.search);
  return params.get('demo') === '1' || import.meta.env.VITE_DEMO_MODE === 'true';
}

export function getDemoHintForScreen(screenName: string): string | null {
  const hints: Record<string, string> = {
    'cloud-dashboard': 'For utilities: highlight basin-wide coverage. For installers: show device health at a glance.',
    'wqt-calculator': 'For farmers: estimate credits from cover crops. For utilities: model offset purchases.',
    'wqt-registry': 'For regulators: demonstrate transparency and audit trail.',
    'wqt-marketplace': 'For buyers: browse verified credits. For sellers: showcase your projects.',
    'commissioning': 'For installers: demonstrate streamlined device setup and validation.',
    'devices': 'For utilities: show real-time monitoring across your deployment.',
    'alerts': 'For operators: highlight proactive issue detection and resolution.',
  };

  return hints[screenName] || null;
}
