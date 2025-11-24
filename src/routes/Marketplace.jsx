// /workspaces/Marketplace/src/routes/Marketplace.jsx
import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Footer from "../components/shared/Footer/Footer";
import { MarketBrowser } from "../components/elements/marketplace";
import EventsPopup from "../components/elements/marketplace/EventsPopup";
import { Input } from "../components/shared/input/Input";
import { ButtonSecondary } from "../components/shared/button/Button";
import { APP_NAME } from "../constants/constants";

import logoImg from "../assets/logo.png";

// ===== LAYOUT WRAPPER =====
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// ===== HEADER (LOGO LEFT, BURGER RIGHT) =====
const HeaderBar = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 12px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center; /* centers logo + burger vertically */

  border-bottom: 1px solid ${({ theme }) => theme.colors.ui200};

  @media (min-width: 1024px) {
    padding: 16px 0;
  }
`;

const LogoImg = styled.img`
  height: 72px;       /* big, but still controlled */
  width: auto;
  display: block;     /* avoid baseline alignment issues */
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  display: flex;
  align-items: center;   /* center icon vertically */
  justify-content: center;

  color: ${({ theme }) => theme.colors.ui900};
  font-size: 26px;
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.primary500};
  }
`;

// ===== SLIDE-DOWN MENU PANEL =====
const MenuPanel = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui200};
  display: flex;
  flex-direction: column;
  padding: 16px 16px 24px;
  gap: 14px;
`;

const MenuSectionTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ui900};
  margin-top: 4px;
`;

const MenuItem = styled(Link)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.ui700};
  text-decoration: none;
  font-weight: 500;
  padding-left: 16px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary500};
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.ui200};
  margin: 12px 0;
`;

// ===== MAIN MARKETPLACE AREA =====
const MarketplaceShell = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px 16px 48px;

  @media (min-width: 1024px) {
    padding: 40px 0 64px;
  }

  .signed-in {
    font-size: 13px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.ui600};
  }
`;

// Search + buttons bar with responsive behavior
const TopBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;

  ${Input} {
    max-width: 420px;
    width: 100%;
  }

  .button-wrapper {
    display: flex;
    gap: 8px;
  }

  /* Desktop */
  @media (min-width: 901px) {
    .button-wrapper {
      width: auto;
    }
  }

  /* Tablet */
  @media (max-width: 900px) and (min-width: 601px) {
    flex-direction: column;
    align-items: stretch;

    .button-wrapper {
      width: 100%;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }

  /* Mobile */
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;

    .button-wrapper {
      width: 100%;
      flex-direction: column;
    }

    ${ButtonSecondary} {
      width: 100%;
    }
  }
`;

const BottomBar = styled.div`
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.ui200};
`;

const SearchIcon = styled(FontAwesomeIcon)`
  margin-left: 8px;
  font-size: 0.85rem;
`;

const CalendarIcon = styled(FontAwesomeIcon)`
  margin-right: 6px;
  font-size: 0.9rem;
`;

// ===== COMPONENT =====
const Marketplace = () => {
  const { STATES } = useAppContext();
  const { user } = STATES || {};

  const [showEventsPopup, setShowEventsPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleEventsPopup = () => setShowEventsPopup((prev) => !prev);
  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <PageWrapper>
      {/* Header: logo left, burger right, centered */}
      <HeaderBar>
        <LogoImg src={logoImg} alt={APP_NAME || "waterquality.trading"} />
        <MenuButton onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </MenuButton>
      </HeaderBar>

      {/* Slide-down menu using your routes */}
      {showMenu && (
        <MenuPanel>
          <MenuSectionTitle>Environment</MenuSectionTitle>
          <MenuItem to="/dashboard/environmental">Dashboard</MenuItem>
          <MenuItem to="/features/nutrient-calculator">
            Nutrient Calculator
          </MenuItem>
          <MenuItem to="/features/stream">Broadcast Live</MenuItem>
          <MenuItem to="/features/upload-media">Upload Media</MenuItem>
          <MenuItem to="/features/verification">Verification</MenuItem>

          <Divider />

          <MenuSectionTitle>Marketplace</MenuSectionTitle>
          <MenuItem to="/marketplace">Marketplace</MenuItem>
          <MenuItem to="/marketplace/seller-dashboard">
            Seller Dashboard
          </MenuItem>

          <Divider />

          <MenuSectionTitle>Finance</MenuSectionTitle>
          <MenuItem to="/dashboard/financial">Dashboard</MenuItem>
        </MenuPanel>
      )}

      {/* Main marketplace content */}
      <MarketplaceShell>
        {user?.email && (
          <div className="signed-in">
            Signed in as <strong>{user.email}</strong>
          </div>
        )}

        <TopBar>
          <Input placeholder="Search for NPCs..." />

          <div className="button-wrapper">
            <ButtonSecondary>
              Search
              <SearchIcon icon={faSearch} />
            </ButtonSecondary>

            <ButtonSecondary onClick={toggleEventsPopup}>
              <CalendarIcon icon={faCalendar} />
              View all Events
            </ButtonSecondary>
          </div>
        </TopBar>

        <BottomBar>
          <MarketBrowser />
        </BottomBar>

        {showEventsPopup && <EventsPopup onClose={toggleEventsPopup} />}
      </MarketplaceShell>

      <Footer />
    </PageWrapper>
  );
};

export default Marketplace;
