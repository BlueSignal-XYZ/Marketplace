import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Page = styled.main`
  width: 100%;
  min-height: calc(100vh - 72px);
  padding: 24px 16px 40px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors?.bg || '#f5f5f5'};

  @media (max-width: 600px) {
    padding: 16px 8px 32px;
  }
`;

const Shell = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 24px;

  h1 {
    margin: 0 0 8px;
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors?.ui900 || '#0f172a'};
  }

  p {
    margin: 0;
    font-size: 15px;
    color: ${({ theme }) => theme.colors?.ui600 || '#4b5563'};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatusCard = styled.div`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.ui200 || '#e5e7eb'};
  border-radius: 12px;
  padding: 20px;

  .label {
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors?.ui500 || '#6b7280'};
    margin-bottom: 8px;
  }

  .value {
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors?.primary700 || '#0369a1'};
    margin-bottom: 4px;
  }

  .subtext {
    font-size: 13px;
    color: ${({ theme }) => theme.colors?.ui600 || '#4b5563'};
  }
`;

const Section = styled.div`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.ui200 || '#e5e7eb'};
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;

  h2 {
    margin: 0 0 16px;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.ui900 || '#0f172a'};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: ${({ theme }) => theme.colors?.ui500 || '#6b7280'};
  font-size: 14px;
`;

const ActionButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background: ${({ theme }) => theme.colors?.primary600 || '#0284c7'};
  color: #ffffff;

  &:hover {
    background: ${({ theme }) => theme.colors?.primary700 || '#0369a1'};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors?.ui300 || '#d1d5db'};
    cursor: not-allowed;
  }
`;

const GettingStartedBanner = styled.div`
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  border-radius: 12px;
  padding: 24px;
  color: #ffffff;
  margin-bottom: 24px;

  h2 {
    margin: 0 0 8px;
    font-size: 20px;
    font-weight: 700;
  }

  p {
    margin: 0 0 16px;
    font-size: 14px;
    line-height: 1.6;
    opacity: 0.95;
  }

  .actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
`;

const BannerButton = styled.button`
  background: #ffffff;
  color: #0284c7;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease-out;

  &:hover {
    background: #f0f9ff;
    transform: translateY(-1px);
  }

  &.secondary {
    background: transparent;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.4);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th {
    text-align: left;
    padding: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.ui700 || '#374151'};
    border-bottom: 2px solid ${({ theme }) => theme.colors?.ui200 || '#e5e7eb'};
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  td {
    padding: 14px 12px;
    border-bottom: 1px solid ${({ theme }) => theme.colors?.ui100 || '#f3f4f6'};
    color: ${({ theme }) => theme.colors?.ui800 || '#1f2937'};
  }

  tr:hover {
    background: ${({ theme }) => theme.colors?.ui50 || '#f9fafb'};
  }

  .credit-type {
    font-weight: 500;
  }

  .price {
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.primary700 || '#0369a1'};
  }

  .btn-link {
    color: ${({ theme }) => theme.colors?.primary600 || '#0284c7'};
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const BuyerDashboard = () => {
  const { STATES } = useAppContext();
  const { user } = STATES || {};
  const navigate = useNavigate();

  const [credits, setCredits] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, [user?.uid]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      // TODO: Replace with real API calls
      // const availableCredits = await CreditAPI.getAvailableCredits();
      // const userPurchases = await UserAPI.purchases.getHistory(user.uid);

      // For now: empty arrays - will show getting started guidance
      setCredits([]);
      setPurchases([]);
    } catch (error) {
      console.error('Error loading buyer dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewCredit = (creditId) => {
    navigate(`/marketplace/listing/${creditId}`);
  };

  const handleBrowseMarketplace = () => {
    navigate('/marketplace');
  };

  if (loading) {
    return (
      <Page>
        <Shell>
          <EmptyState>Loading your dashboard...</EmptyState>
        </Shell>
      </Page>
    );
  }

  const totalSpent = purchases.reduce((sum, p) => sum + p.price, 0);
  const pendingCount = purchases.filter((p) => p.status.includes('Pending')).length;

  return (
    <Page>
      <Shell>
        <Header>
          <h1>Credit Buyer Dashboard</h1>
          <p>
            Browse available credits, track your purchases, and meet compliance requirements.
          </p>
        </Header>

        {credits.length === 0 && purchases.length === 0 && !loading && (
          <GettingStartedBanner>
            <h2>Welcome to WaterQuality.Trading</h2>
            <p>
              Purchase verified nutrient reduction, stormwater, and thermal mitigation credits
              to meet compliance requirements and support watershed restoration.
            </p>
            <div className="actions">
              <BannerButton onClick={handleBrowseMarketplace}>
                Browse Available Credits
              </BannerButton>
              <BannerButton className="secondary" onClick={() => navigate('/registry')}>
                Explore Registry
              </BannerButton>
            </div>
          </GettingStartedBanner>
        )}

        <Grid>
          <StatusCard>
            <div className="label">Available Credits</div>
            <div className="value">{credits.length}</div>
            <div className="subtext">Ready to purchase</div>
          </StatusCard>

          <StatusCard>
            <div className="label">Total Spent</div>
            <div className="value">${totalSpent.toFixed(0)}</div>
            <div className="subtext">{purchases.length} purchases</div>
          </StatusCard>

          <StatusCard>
            <div className="label">Pending Verification</div>
            <div className="value">{pendingCount}</div>
            <div className="subtext">Awaiting approval</div>
          </StatusCard>
        </Grid>

        <Section>
          <h2>Available Credits for Purchase</h2>
          {credits.length === 0 ? (
            <EmptyState>
              <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '12px' }}>
                No credits loaded yet
              </p>
              <p style={{ marginTop: '8px', fontSize: '13px', marginBottom: '16px' }}>
                Browse the marketplace to discover nutrient reduction, stormwater retention, and thermal mitigation credits.
              </p>
              <ActionButton onClick={handleBrowseMarketplace}>
                Browse Marketplace
              </ActionButton>
            </EmptyState>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>Credit Type</th>
                  <th>Amount</th>
                  <th>Location</th>
                  <th>Seller</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {credits.map((credit) => (
                  <tr key={credit.id}>
                    <td className="credit-type">{credit.type}</td>
                    <td>
                      {credit.amount} {credit.unit}
                    </td>
                    <td>{credit.location}</td>
                    <td>{credit.seller}</td>
                    <td className="price">${credit.price}</td>
                    <td>
                      <span
                        className="btn-link"
                        onClick={() => handleViewCredit(credit.id)}
                      >
                        View Details
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Section>

        <Section>
          <h2>Recent Purchases</h2>
          {purchases.length === 0 ? (
            <EmptyState>
              <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '12px' }}>
                No purchases yet
              </p>
              <p style={{ marginTop: '8px', fontSize: '13px' }}>
                Your purchase history will appear here once you complete your first transaction.
              </p>
            </EmptyState>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((purchase) => (
                  <tr key={purchase.id}>
                    <td>{purchase.date}</td>
                    <td className="credit-type">{purchase.type}</td>
                    <td>
                      {purchase.amount} {purchase.unit}
                    </td>
                    <td className="price">${purchase.price}</td>
                    <td>{purchase.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Section>
      </Shell>
    </Page>
  );
};

export default BuyerDashboard;
