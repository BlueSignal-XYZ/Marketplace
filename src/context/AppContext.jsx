import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut, getRedirectResult } from "firebase/auth";
import { auth } from "../apis/firebase";
import { UserAPI } from "../scripts/back_door";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [routePath, setRoutePath] = useState("");
  const [showSubItems, setShowSubItems] = useState(false);
  const [notificationBarOpen, setNotificationBarOpen] = useState(false);
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);
  const [verificationUIOpen, setVerificationUIOpen] = useState(false);
  const [verificationData, setVerificationData] = useState({});
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState("Profile Settings");
  const [confirmation, setConfirmation] = useState(null);
  const [result, setResult] = useState(null);
  const [notification, setNotification] = useState("");
  const [txPopupVisible, setTxPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Mobile detection
  useEffect(() => {
    const isMobileScreen = () => window.innerWidth <= 768;
    setIsMobile(isMobileScreen());
    const handler = () => setIsMobile(isMobileScreen());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Helper to load user data from Firebase user
  const loadUserData = async (firebaseUser) => {
    if (!firebaseUser) {
      sessionStorage.removeItem("user");
      setUser(null);
      return null;
    }

    try {
      const userdata = (await UserAPI.account.getUserFromUID(firebaseUser.uid))?.userdata;

      if (userdata?.uid) {
        sessionStorage.setItem("user", JSON.stringify(userdata));
        setUser(userdata);
        console.log("✅ User loaded:", userdata.uid, "| Role:", userdata.role || "none");
        return userdata;
      } else {
        // Firebase user exists but not in backend - use Firebase data
        const fallbackUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          role: "buyer", // default fallback
        };
        sessionStorage.setItem("user", JSON.stringify(fallbackUser));
        setUser(fallbackUser);
        console.log("⚠️ User loaded from Firebase (backend fallback):", fallbackUser.uid);
        return fallbackUser;
      }
    } catch (error) {
      console.error("❌ Failed to fetch user data:", error);
      // Still set Firebase user so they're not stuck
      const fallbackUser = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        role: "buyer",
      };
      sessionStorage.setItem("user", JSON.stringify(fallbackUser));
      setUser(fallbackUser);
      return fallbackUser;
    }
  };

  // CRITICAL: Firebase Auth Initialization
  // Must check for redirect result BEFORE setting up onAuthStateChanged
  // to prevent showing login page during redirect auth flow
  useEffect(() => {
    console.log("🔐 Initializing Firebase auth...");
    let unsubscribe = null;

    const initAuth = async () => {
      // Step 1: Check for pending redirect result FIRST
      // This is critical for signInWithRedirect to work properly
      try {
        console.log("🔄 Checking for redirect result...");
        const redirectResult = await getRedirectResult(auth);

        if (redirectResult?.user) {
          console.log("✅ Redirect auth success:", redirectResult.user.uid);
          await loadUserData(redirectResult.user);
          setAuthLoading(false);
          setIsLoading(false);

          // Set up listener for future auth changes (logout, etc.)
          unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            console.log("🔐 Auth state changed:", firebaseUser?.uid || "signed out");
            if (!firebaseUser) {
              sessionStorage.removeItem("user");
              setUser(null);
              console.log("🚪 User signed out");
            }
            // Don't re-load user data here - we already have it
          });
          return;
        }
      } catch (error) {
        // Redirect errors are handled, but we continue to check auth state
        console.log("🔄 No redirect result (or error):", error?.code || "none");
      }

      // Step 2: No redirect result - set up normal auth state listener
      console.log("🔐 Setting up auth state listener...");
      unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        console.log("🔐 Auth state changed:", firebaseUser?.uid || "signed out");

        if (firebaseUser) {
          await loadUserData(firebaseUser);
        } else {
          sessionStorage.removeItem("user");
          setUser(null);
          console.log("🚪 User signed out");
        }

        setAuthLoading(false);
        setIsLoading(false);
      });
    };

    initAuth();

    // Cleanup listener on unmount
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // Manual user update (for registration or profile edits)
  const updateUser = async (uid, _userdata = {}) => {
    try {
      var userdata;
      if (_userdata?.uid) {
        userdata = _userdata;
      } else {
        userdata = (await UserAPI.account.getUserFromUID(uid))?.userdata;
      }
      if (userdata?.uid) {
        sessionStorage.setItem("user", JSON.stringify(userdata));
        setUser(userdata);
        console.log("✅ User manually updated:", userdata.uid, "| Role:", userdata.role);
        return true;
      }
    } catch (error) {
      logNotification("error", error.message);
      console.error("❌ updateUser failed:", error);
    }
    return null;
  };

  const handleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleNotificationsBar = () =>
    setNotificationBarOpen(!notificationBarOpen);
  const handleVerificationUI = () => setVerificationUIOpen(!verificationUIOpen);
  const handleSettingsMenu = () => setSettingsMenuOpen(!settingsMenuOpen);
  const handleSettingsTab = (tab) => {
    setSettingsTab(tab);
    setSettingsMenuOpen(true);
  };
  const toggleCalculator = () => setCalculatorOpen(!calculatorOpen);
  const logConfirmation = (message, action) =>
    setConfirmation({ msg: message, action });
  const cancelConfirmation = (accepted) => {
    setConfirmation(null);
    if (!accepted) logNotification("error", "Action Denied");
  };
  const logNotification = (type, message) =>
    setNotification({ [type]: message });
  const clearNotification = () => setNotification({});

  // Universal logout function - signs out from Firebase and clears state
  const logout = async () => {
    console.log("🔓 Logging out...");
    try {
      await signOut(auth);
      sessionStorage.removeItem("user");
      setUser(null);
      console.log("🔓 User logged out successfully");
      window.location.href = "/";
    } catch (error) {
      console.error("❌ Logout failed:", error);
      logNotification("error", "Logout failed. Please try again.");
    }
  };

  // Legacy handleLogOut with confirmation dialog
  const handleLogOut = () => {
    logConfirmation("Are you sure you want to log out?", logout);
  };

  const toggleEnvironmentSubItems = () => setShowSubItems(!showSubItems);

  const APP = {
    STATES: {
      authLoading,
      isLoading,
      isMobile,
      user,
      searchResults,
      routePath,
      sidebarOpen,
      notificationBarOpen,
      verificationUIOpen,
      verificationData,
      settingsMenuOpen,
      calculatorOpen,
      settingsTab,
      confirmation,
      notification,
      txPopupVisible,
      result,
      showSubItems,
    },
    ACTIONS: {
      setIsLoading,
      updateUser,
      setUser, // ADDED: For direct user state updates (used by LoginForm)
      setSearchResults,
      setRoutePath,
      handleSidebar,
      handleNotificationsBar,
      handleVerificationUI,
      setVerificationUIOpen,
      setVerificationData,
      handleSettingsMenu,
      handleSettingsTab,
      toggleCalculator,
      logConfirmation,
      clearNotification,
      setResult,
      setTxPopupVisible,
      cancelConfirmation,
      logNotification,
      logout, // Universal logout - signs out from Firebase
      handleLogOut, // Legacy logout with confirmation
      toggleEnvironmentSubItems,
    },
  };

  return <AppContext.Provider value={APP}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
