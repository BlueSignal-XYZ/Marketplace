// /src/App.jsx
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";

import { CloudHeader } from "./components/navigation/CloudHeader";
import { MarketplaceHeader } from "./components/navigation/MarketplaceHeader";
import { MarketplaceMenu } from "./components/navigation/MarketplaceMenu";
import { CloudMenu } from "./components/navigation/CloudMenu";

import LinkBadgePortal from "./components/LinkBadgePortal.jsx";

import {
  Welcome,
  Home,
  Marketplace,
  NotFound,
  FinancialDashboard,
} from "./routes";

import {
  Registry,
  RecentRemoval,
  CertificatePage,
  Map,
  Presale,
} from "./components/routes";

import {
  NotificationBar,
  NutrientCalculator,
  SettingsMenu,
} from "./components";

import {
  SellerDashboard,
  ListingPage,
} from "./components/elements/marketplace";

import { Livepeer } from "./components/elements/livepeer";
import { VerificationUI } from "./components/elements/contractUI";

import {
  Notification,
  Confirmation,
  ResultPopup,
} from "./components/popups";

import { useAppContext } from "./context/AppContext";

// Cloud console components
import OverviewDashboard from "./components/cloud/OverviewDashboard";
import DevicesListPage from "./components/cloud/DevicesListPage";
import DeviceDetailPage from "./components/cloud/DeviceDetailPage";
import CommissioningPage from "./components/cloud/CommissioningPage";
import AlertsPage from "./components/cloud/AlertsPage";

import {
  CloudNutrientCalculator,
  CloudVerification,
  CloudLiveStream,
  CloudUploadMedia,
  CloudMediaPlayer,
} from "./components/cloud/CloudToolsWrapper";

// Role dashboards
import BuyerDashboard from "./components/dashboards/BuyerDashboard";
import SellerDashboard_Role from "./components/dashboards/SellerDashboard";
import InstallerDashboard from "./components/dashboards/InstallerDashboard";

import { getDefaultDashboardRoute } from "./utils/roleRouting";

/* -------------------------------------------------------------------------- */
/*                              DEBUG VERSION TAG                              */
/* -------------------------------------------------------------------------- */

const BUILD_VERSION =
  import.meta.env.VITE_BUILD_VERSION ||
  new Date().toISOString().slice(0, 10);
console.log("🔥 BUILD VERSION:", BUILD_VERSION);

/* -------------------------------------------------------------------------- */
/*                                   APP ROOT                                 */
/* -------------------------------------------------------------------------- */

function App() {
  const { STATES } = useAppContext();
  const { user } = STATES || {};

  const host = window.location.hostname;
  const params = new URLSearchParams(window.location.search);
  let mode = "marketplace";

  // MODE DETECTION
  if (
    host === "cloud.bluesignal.xyz" ||
    host.endsWith(".cloud.bluesignal.xyz") ||
    host === "cloud-bluesignal.web.app"
  ) {
    mode = "cloud";
  } else if (
    host === "waterquality.trading" ||
    host === "waterquality-trading.web.app" ||
    host.endsWith(".waterquality.trading")
  ) {
    mode = "marketplace";
  } else {
    const appParam = params.get("app");
    if (appParam === "cloud" || appParam === "marketplace") {
      mode = appParam;
    }
  }

  console.log("🌐 MODE:", mode, "| USER:", user?.uid || "none");

  return (
    <Router>
      <AppShell mode={mode} user={user} />
    </Router>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   APP SHELL                                */
/* -------------------------------------------------------------------------- */

function AppShell({ mode, user }) {
  const location = useLocation();

  const [cloudMenuOpen, setCloudMenuOpen] = React.useState(false);
  const [marketMenuOpen, setMarketMenuOpen] = React.useState(false);

  const toggleCloudMenu = () => {
    console.log("📡 CLOUD MENU TOGGLE:", !cloudMenuOpen);
    setCloudMenuOpen((p) => !p);
  };

  const toggleMarketMenu = () => {
    console.log("🛒 MARKET MENU TOGGLE:", !marketMenuOpen);
    setMarketMenuOpen((p) => !p);
  };

  // Apply tab title
  React.useEffect(() => {
    document.title =
      mode === "cloud"
        ? "BlueSignal Cloud Monitoring"
        : "WaterQuality.Trading";
  }, [mode]);

  // Close menus on route change
  React.useEffect(() => {
    setCloudMenuOpen(false);
    setMarketMenuOpen(false);
  }, [location.pathname]);

  const isAuthLanding = location.pathname === "/";

  return (
    <AppContainer>
      {/* DEBUG VERSION BUBBLE */}
      <div
        style={{
          position: "fixed",
          bottom: 8,
          right: 12,
          fontSize: "11px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
          fontWeight: 500,
          opacity: 0.6,
          zIndex: 99999,
          background: "#ffffff",
          color: "#64748b",
          padding: "4px 10px",
          borderRadius: "999px",
          border: "1px solid #e2e8f0",
          boxShadow: "0 2px 8px rgba(15, 23, 42, 0.08)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        Last updated: {BUILD_VERSION}
      </div>

      {/* HEADERS */}
      {!isAuthLanding && mode === "cloud" && (
        <CloudHeader onMenuClick={toggleCloudMenu} />
      )}

      {!isAuthLanding && mode === "marketplace" && (
        <MarketplaceHeader onMenuClick={toggleMarketMenu} />
      )}

      {/* GLOBAL POPUPS */}
      <Popups />

      {/* MENUS */}
      {mode === "marketplace" && (
        <MarketplaceMenu
          open={marketMenuOpen}
          onClose={() => setMarketMenuOpen(false)}
          user={user}
        />
      )}

      {mode === "cloud" && (
        <CloudMenu
          open={cloudMenuOpen}
          onClose={() => setCloudMenuOpen(false)}
          user={user}
        />
      )}

      {/* ROUTES */}
      {mode === "cloud" ? (
        <CloudRoutes user={user} />
      ) : (
        <MarketplaceRoutes user={user} />
      )}

      {/* BADGE PORTAL */}
      {user?.uid && <LinkBadgePortal />}
    </AppContainer>
  );
}

/* -------------------------------------------------------------------------- */
/*                        LANDING / POST-AUTH REDIRECTS                        */
/* -------------------------------------------------------------------------- */

const CloudLanding = ({ user }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user?.uid) {
      const route = getDefaultDashboardRoute(user, "cloud");
      navigate(route, { replace: true });
    }
  }, [user, navigate]);

  return <Welcome />;
};

const MarketplaceLanding = ({ user }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user?.uid) {
      const route = getDefaultDashboardRoute(user, "marketplace");
      navigate(route, { replace: true });
    }
  }, [user, navigate]);

  return <Welcome />;
};

/* -------------------------------------------------------------------------- */
/*                           AUTH GUARD HELPER                                */
/* -------------------------------------------------------------------------- */

/**
 * RequireAuth - Wraps route elements to handle authentication
 *
 * This ensures routes are always registered, but content depends on auth state:
 * - If user not logged in: shows Welcome/login screen
 * - If user logged in: shows the protected component
 *
 * This prevents 404s during auth initialization and route tree rebuilds.
 */
const RequireAuth = ({ children, user }) => {
  if (!user?.uid) {
    // Not authenticated or auth still loading - show Welcome
    return <Welcome />;
  }
  // Authenticated - render the protected component
  return children;
};

/* -------------------------------------------------------------------------- */
/*                                 CLOUD ROUTES                                */
/* -------------------------------------------------------------------------- */

/**
 * Cloud Routes - BlueSignal Monitoring Console
 *
 * IMPORTANT: All routes are registered unconditionally to prevent 404s.
 * Auth is handled via RequireAuth wrapper, not conditional rendering of <Route>.
 *
 * Route order matters: specific routes BEFORE dynamic routes.
 */
const CloudRoutes = ({ user }) => {
  console.log("🔵 CloudRoutes rendering, user:", user?.uid || "none");

  return (
    <Routes>
      {/* Landing page - handles post-auth redirect */}
      <Route path="/" element={<CloudLanding user={user} />} />

      {/* ==================== DASHBOARD ROUTES (specific before dynamic) ==================== */}

      {/* Main cloud dashboard - always available */}
      <Route
        path="/dashboard/main"
        element={
          <RequireAuth user={user}>
            <OverviewDashboard />
          </RequireAuth>
        }
      />

      {/* Role-specific dashboards */}
      <Route
        path="/dashboard/buyer"
        element={
          <RequireAuth user={user}>
            <BuyerDashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/seller"
        element={
          <RequireAuth user={user}>
            <SellerDashboard_Role />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/installer"
        element={
          <RequireAuth user={user}>
            <InstallerDashboard />
          </RequireAuth>
        }
      />

      {/* Legacy dashboard - MUST come after specific dashboard routes */}
      <Route
        path="/dashboard/:dashID"
        element={
          <RequireAuth user={user}>
            <Home />
          </RequireAuth>
        }
      />

      {/* ==================== CLOUD CONSOLE ROUTES ==================== */}

      <Route
        path="/cloud/sites"
        element={
          <RequireAuth user={user}>
            <OverviewDashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/cloud/devices"
        element={
          <RequireAuth user={user}>
            <DevicesListPage />
          </RequireAuth>
        }
      />
      <Route
        path="/cloud/devices/:deviceId"
        element={
          <RequireAuth user={user}>
            <DeviceDetailPage />
          </RequireAuth>
        }
      />
      <Route
        path="/cloud/commissioning"
        element={
          <RequireAuth user={user}>
            <CommissioningPage />
          </RequireAuth>
        }
      />
      <Route
        path="/cloud/alerts"
        element={
          <RequireAuth user={user}>
            <AlertsPage />
          </RequireAuth>
        }
      />

      {/* ==================== CLOUD TOOLS ==================== */}

      <Route
        path="/cloud/tools/nutrient-calculator"
        element={
          <RequireAuth user={user}>
            <CloudNutrientCalculator />
          </RequireAuth>
        }
      />
      <Route
        path="/cloud/tools/verification"
        element={
          <RequireAuth user={user}>
            <CloudVerification />
          </RequireAuth>
        }
      />
      <Route
        path="/cloud/tools/live"
        element={
          <RequireAuth user={user}>
            <CloudLiveStream />
          </RequireAuth>
        }
      />
      <Route
        path="/cloud/tools/upload-media"
        element={
          <RequireAuth user={user}>
            <CloudUploadMedia />
          </RequireAuth>
        }
      />

      {/* ==================== MEDIA ROUTES ==================== */}

      <Route
        path="/media/:playbackID"
        element={
          <RequireAuth user={user}>
            <CloudMediaPlayer />
          </RequireAuth>
        }
      />
      <Route
        path="/media/live/:liveID"
        element={
          <RequireAuth user={user}>
            <CloudMediaPlayer />
          </RequireAuth>
        }
      />

      {/* ==================== LEGACY ROUTES (backwards compatibility) ==================== */}

      <Route
        path="/features/nutrient-calculator"
        element={
          <RequireAuth user={user}>
            <CloudNutrientCalculator />
          </RequireAuth>
        }
      />
      <Route
        path="/features/verification"
        element={
          <RequireAuth user={user}>
            <CloudVerification />
          </RequireAuth>
        }
      />
      <Route
        path="/features/stream"
        element={
          <RequireAuth user={user}>
            <CloudLiveStream />
          </RequireAuth>
        }
      />
      <Route
        path="/features/upload-media"
        element={
          <RequireAuth user={user}>
            <CloudUploadMedia />
          </RequireAuth>
        }
      />
      <Route
        path="/features/:serviceID"
        element={
          <RequireAuth user={user}>
            <Livepeer />
          </RequireAuth>
        }
      />

      {/* ==================== 404 CATCH-ALL ==================== */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

/* -------------------------------------------------------------------------- */
/*                             MARKETPLACE ROUTES                              */
/* -------------------------------------------------------------------------- */

/**
 * Marketplace Routes - WaterQuality.Trading
 *
 * IMPORTANT: All routes are registered unconditionally to prevent 404s.
 * Auth is handled via RequireAuth wrapper, not conditional rendering of <Route>.
 */
const MarketplaceRoutes = ({ user }) => {
  console.log("🛒 MarketplaceRoutes rendering, user:", user?.uid || "none");

  return (
    <Routes>
      {/* Landing page - handles post-auth redirect */}
      <Route path="/" element={<MarketplaceLanding user={user} />} />

      {/* ==================== PUBLIC MARKETPLACE ROUTES ==================== */}

      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/marketplace/listing/:id" element={<ListingPage />} />
      <Route path="/recent-removals" element={<RecentRemoval />} />
      <Route path="/certificate/:id" element={<CertificatePage />} />
      <Route path="/registry" element={<Registry />} />
      <Route path="/map" element={<Map />} />
      <Route path="/presale" element={<Presale />} />

      {/* ==================== ROLE DASHBOARDS ==================== */}

      <Route
        path="/dashboard/buyer"
        element={
          <RequireAuth user={user}>
            <BuyerDashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/seller"
        element={
          <RequireAuth user={user}>
            <SellerDashboard_Role />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/installer"
        element={
          <RequireAuth user={user}>
            <InstallerDashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/financial"
        element={
          <RequireAuth user={user}>
            <FinancialDashboard />
          </RequireAuth>
        }
      />

      {/* ==================== MARKETPLACE TOOLS ==================== */}

      <Route
        path="/marketplace/tools/calculator"
        element={
          <RequireAuth user={user}>
            <NutrientCalculator />
          </RequireAuth>
        }
      />
      <Route
        path="/marketplace/tools/live"
        element={
          <RequireAuth user={user}>
            <Livepeer />
          </RequireAuth>
        }
      />
      <Route
        path="/marketplace/tools/upload"
        element={
          <RequireAuth user={user}>
            <Livepeer />
          </RequireAuth>
        }
      />
      <Route
        path="/marketplace/tools/verification"
        element={
          <RequireAuth user={user}>
            <VerificationUI />
          </RequireAuth>
        }
      />

      {/* ==================== SELLER ACCOUNT ==================== */}

      <Route
        path="/marketplace/seller-dashboard"
        element={
          <RequireAuth user={user}>
            <SellerDashboard />
          </RequireAuth>
        }
      />

      {/* ==================== 404 CATCH-ALL ==================== */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

/* -------------------------------------------------------------------------- */
/*                                GLOBAL POPUPS                                */
/* -------------------------------------------------------------------------- */

const Popups = () => (
  <>
    <Notification />
    <Confirmation />
    <ResultPopup />
    <NotificationBar />
    <SettingsMenu />
  </>
);

/* -------------------------------------------------------------------------- */
/*                               APP WRAPPER                                   */
/* -------------------------------------------------------------------------- */

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

export default App;
