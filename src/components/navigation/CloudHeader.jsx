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
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui200};
  background: ${({ theme }) => theme.colors.bg || "#ffffff"};
`;

const HeaderInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;

  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    height: 72px;
  }

  @media (min-width: 1024px) {
    padding: 0 24px;
  }
`;

const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
  display: block;

  @media (min-width: 768px) {
    height: 48px;
  }

  @media (min-width: 1024px) {
    height: 56px;
  }
`;

const MenuButton = styled.button`
  height: 44px;
  width: 44px;
  border-radius: 8px;

  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.ui900};
  font-size: 22px;
  line-height: 1;
  transition: all 0.15s ease-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary500};
    background: ${({ theme }) => theme.colors.ui50};
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
