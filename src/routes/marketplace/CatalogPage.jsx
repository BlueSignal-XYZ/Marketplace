import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CATALOG_PASSWORD = "12345";
const SESSION_KEY = "catalog_authenticated";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors?.ui50 || "#fafafa"};
`;

const CatalogShell = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 64px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 24px 16px 48px;
  }
`;

const HeaderBlock = styled.header`
  text-align: center;
  margin-bottom: 48px;

  h1 {
    margin: 0 0 12px;
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors?.ui900 || "#0f172a"};
  }

  p {
    margin: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors?.ui500 || "#71717a"};
    max-width: 600px;
    margin: 0 auto;
  }
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 32px;
`;

const PasswordCard = styled.div`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.ui200 || "#e5e7eb"};
  border-radius: 16px;
  padding: 40px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
`;

const LockIcon = styled.div`
  font-size: 48px;
  margin-bottom: 24px;
`;

const PasswordTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.ui900 || "#0f172a"};
`;

const PasswordSubtitle = styled.p`
  margin: 0 0 24px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.ui500 || "#71717a"};
`;

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PasswordInput = styled.input`
  height: 48px;
  padding: 0 16px;
  border: 1px solid ${({ theme, $error }) =>
    $error ? (theme.colors?.red500 || "#ef4444") : (theme.colors?.ui200 || "#e5e7eb")};
  border-radius: 12px;
  font-size: 16px;
  text-align: center;
  letter-spacing: 4px;
  transition: all 0.15s ease-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors?.primary500 || "#1D7072"};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors?.primary50 || "#EFFBFB"};
  }

  &::placeholder {
    letter-spacing: normal;
  }
`;

const SubmitButton = styled.button`
  height: 48px;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors?.primary500 || "#1D7072"};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors?.primary600 || "#196061"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.red500 || "#ef4444"};
`;

const CatalogContent = styled.div`
  /* Placeholder for catalog content */
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.ui200 || "#e5e7eb"};
  border-radius: 16px;

  h2 {
    margin: 0 0 8px;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.ui900 || "#0f172a"};
  }

  p {
    margin: 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors?.ui500 || "#71717a"};
  }
`;

const CatalogPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated in this session
    const authenticated = sessionStorage.getItem(SESSION_KEY) === "true";
    setIsAuthenticated(authenticated);
    setIsLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password === CATALOG_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setIsAuthenticated(true);
    } else {
      setError("Incorrect password. Please try again.");
      setPassword("");
    }
  };

  if (isLoading) {
    return (
      <PageWrapper>
        <CatalogShell>
          <PasswordContainer>
            <p>Loading...</p>
          </PasswordContainer>
        </CatalogShell>
      </PageWrapper>
    );
  }

  if (!isAuthenticated) {
    return (
      <PageWrapper>
        <CatalogShell>
          <PasswordContainer>
            <PasswordCard>
              <LockIcon>🔒</LockIcon>
              <PasswordTitle>Protected Catalog</PasswordTitle>
              <PasswordSubtitle>
                Enter the password to access the product catalog
              </PasswordSubtitle>
              <PasswordForm onSubmit={handleSubmit}>
                <PasswordInput
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  $error={!!error}
                  autoFocus
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <SubmitButton type="submit">Access Catalog</SubmitButton>
              </PasswordForm>
            </PasswordCard>
          </PasswordContainer>
        </CatalogShell>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <CatalogShell>
        <HeaderBlock>
          <h1>Product Catalog</h1>
          <p>Browse our available products and solutions</p>
        </HeaderBlock>

        <CatalogContent>
          <EmptyState>
            <h2>Catalog Content Coming Soon</h2>
            <p>Product information will be displayed here.</p>
          </EmptyState>
        </CatalogContent>
      </CatalogShell>
    </PageWrapper>
  );
};

export default CatalogPage;
