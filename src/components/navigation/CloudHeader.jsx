// /src/components/navigation/CloudHeader.jsx
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import blueSignalLogo from "../../assets/bluesignal-logo.png";

const HeaderOuter = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(229, 231, 235, 0.8);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    height: 72px;
  }

  @media (min-width: 1024px) {
    padding: 0 32px;
  }
`;

const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 36px;
  width: auto;
  display: block;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    height: 44px;
  }

  @media (min-width: 1024px) {
    height: 52px;
  }
`;

const MenuButton = styled.button`
  height: 44px;
  width: 44px;
  border-radius: 12px;
  background: transparent;
  border: 1.5px solid transparent;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors?.ui700 || "#374151"};
  font-size: 20px;
  line-height: 1;
  transition: all 0.2s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors?.primary600 || "#196061"};
    background: ${({ theme }) => theme.colors?.primary50 || "#E6F7F8"};
    border-color: ${({ theme }) => theme.colors?.primary200 || "#8FDADB"};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export function CloudHeader({ onMenuClick }) {
  return (
    <HeaderOuter>
      <HeaderInner>
        <LogoWrapper>
          <LogoImg src={blueSignalLogo} alt="BlueSignal Cloud Monitoring" />
        </LogoWrapper>

        <MenuButton onClick={onMenuClick} aria-label="Open cloud menu">
          <FontAwesomeIcon icon={faBars} />
        </MenuButton>
      </HeaderInner>
    </HeaderOuter>
  );
}
