// /src/components/cloud/CloudPageLayout.jsx
import React from "react";
import styled from "styled-components";

const Page = styled.main`
  width: 100%;
  min-height: calc(100vh - 72px);
  padding: 32px 24px 64px;
  box-sizing: border-box;
  background: linear-gradient(180deg, #FAFAFA 0%, #F4F5F7 100%);

  @media (max-width: 768px) {
    padding: 20px 16px 48px;
  }

  @media (max-width: 480px) {
    padding: 16px 12px 40px;
  }
`;

const Shell = styled.div`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || "1200px"};
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 800;
  color: ${({ theme }) => theme.colors?.ui900 || "#111827"};
  letter-spacing: -0.03em;

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors?.ui500 || "#6B7280"};
  max-width: 600px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Breadcrumbs = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors?.ui500 || "#6B7280"};
  margin-bottom: 16px;

  a {
    color: ${({ theme }) => theme.colors?.primary600 || "#196061"};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.15s ease-out;

    &:hover {
      color: ${({ theme }) => theme.colors?.primary700 || "#0F393A"};
      text-decoration: underline;
    }
  }

  span.separator {
    color: ${({ theme }) => theme.colors?.ui300 || "#D1D5DB"};
    font-size: 11px;
  }

  span.current {
    color: ${({ theme }) => theme.colors?.ui700 || "#374151"};
    font-weight: 500;
  }
`;

const ActionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;

    > * {
      flex: 1;
      min-width: 140px;
    }
  }
`;

const Content = styled.div`
  width: 100%;
`;

/**
 * CloudPageLayout - Standardized layout for all Cloud mode pages
 *
 * @param {string} title - Page title
 * @param {string} subtitle - Optional subtitle/description
 * @param {React.ReactNode} breadcrumbs - Optional breadcrumb navigation
 * @param {React.ReactNode} actions - Optional action buttons/controls
 * @param {React.ReactNode} children - Page content
 * @param {string} maxWidth - Optional max-width override (default: 1200px)
 */
export function CloudPageLayout({
  title,
  subtitle,
  breadcrumbs,
  actions,
  children,
  maxWidth,
}) {
  return (
    <Page>
      <Shell $maxWidth={maxWidth}>
        <Header>
          {breadcrumbs && <Breadcrumbs>{breadcrumbs}</Breadcrumbs>}
          <TitleRow>
            <TitleBlock>
              <Title>{title}</Title>
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </TitleBlock>
            {actions && <ActionBar>{actions}</ActionBar>}
          </TitleRow>
        </Header>
        <Content>{children}</Content>
      </Shell>
    </Page>
  );
}

export default CloudPageLayout;
