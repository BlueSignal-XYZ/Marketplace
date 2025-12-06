// src/routes/SalesCatalog.jsx
/**
 * Password-protected Sales Product Catalog Page
 * Requires password authentication to view catalog content
 */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CATALOG_PASSWORD = "12345";
const STORAGE_KEY = "sales_catalog_authenticated";

const SalesCatalog = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if already authenticated from session
  useEffect(() => {
    const authenticated = sessionStorage.getItem(STORAGE_KEY);
    if (authenticated === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password === CATALOG_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(STORAGE_KEY);
    setPassword("");
  };

  if (!isAuthenticated) {
    return (
      <PageContainer>
        <LoginCard>
          <LockIcon>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </LockIcon>
          <Title>Sales Catalog</Title>
          <Subtitle>Enter password to access the product catalog</Subtitle>

          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <PasswordInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoFocus
              />
            </InputWrapper>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <SubmitButton type="submit">Access Catalog</SubmitButton>
          </Form>
        </LoginCard>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <CatalogContainer>
        <CatalogHeader>
          <HeaderContent>
            <CatalogTitle>Sales Product Catalog</CatalogTitle>
            <LogoutButton onClick={handleLogout}>Lock Catalog</LogoutButton>
          </HeaderContent>
        </CatalogHeader>

        <CatalogContent>
          {/* Placeholder content - will be replaced with embedded content */}
          <PlaceholderSection>
            <PlaceholderIcon>
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
            </PlaceholderIcon>
            <PlaceholderText>
              Catalog content will be displayed here.
              <br />
              Awaiting content to be embedded.
            </PlaceholderText>
          </PlaceholderSection>
        </CatalogContent>
      </CatalogContainer>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 20px;
`;

const LoginCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 48px 40px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

const LockIcon = styled.div`
  color: #3b82f6;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 8px 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0 0 32px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  text-align: left;
  padding: 8px 12px;
  background: #fef2f2;
  border-radius: 8px;
  border: 1px solid #fecaca;
`;

const SubmitButton = styled.button`
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px -10px rgba(59, 130, 246, 0.5);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CatalogContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
`;

const CatalogHeader = styled.div`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  padding: 24px 32px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CatalogTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin: 0;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #3b82f6;
  background: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
  }
`;

const CatalogContent = styled.div`
  flex: 1;
  padding: 32px;
`;

const PlaceholderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #94a3b8;
`;

const PlaceholderIcon = styled.div`
  margin-bottom: 24px;
  opacity: 0.5;
`;

const PlaceholderText = styled.p`
  font-size: 16px;
  text-align: center;
  line-height: 1.6;
  margin: 0;
`;

export default SalesCatalog;
