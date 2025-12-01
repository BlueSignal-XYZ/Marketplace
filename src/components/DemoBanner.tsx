import React, { useState } from 'react';
import styled from 'styled-components';
import { isDemoMode } from '../utils/demoMode';

const BannerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const BannerText = styled.span`
  margin-right: 12px;
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
`;

export function DemoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (!isDemoMode() || dismissed) return null;

  return (
    <BannerContainer>
      <BannerText>Demo Mode — sample data shown</BannerText>
      <CloseButton onClick={() => setDismissed(true)} aria-label="Dismiss demo banner">
        Dismiss
      </CloseButton>
    </BannerContainer>
  );
}
