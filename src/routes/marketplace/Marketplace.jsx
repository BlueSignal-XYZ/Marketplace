// /src/routes/marketplace/Marketplace.jsx
import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MarketplaceShell = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px 16px 48px;

  @media (min-width: 1024px) {
    padding: 40px 0 64px;
  }
`;

const HeaderBlock = styled.header`
  margin-bottom: 24px;

  h1 {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.ui900};
  }

  p {
    margin: 6px 0 0;
    font-size: 14px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.ui600};
    max-width: 640px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 28px;

    h1 {
      font-size: 24px;
    }
  }
`;

const Placeholder = styled.div`
  padding: 16px;
  border-radius: 12px;
  border: 1px dashed ${({ theme }) => theme.colors.ui300};
  background: ${({ theme }) => theme.colors.bgAlt || "#fafafa"};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.ui700};
`;

const Marketplace = () => {
  return (
    <PageWrapper>
      <MarketplaceShell>
        <HeaderBlock>
          <h1>WaterQuality.Trading Marketplace</h1>
          <p>
            This is a temporary shell to verify that routing is working. Once
            confirmed, we’ll reattach the full marketplace browser and tools.
          </p>
        </HeaderBlock>

        <Placeholder>
          If you can see this, the <code>/marketplace</code> route and layout
          are healthy. Any previous blank screen was coming from a child
          component (MarketBrowser, EventsPopup, Footer, etc.), which we can
          add back in one by one.
        </Placeholder>
      </MarketplaceShell>
    </PageWrapper>
  );
};

export default Marketplace;
