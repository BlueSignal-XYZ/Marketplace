// /src/routes/marketplace/Marketplace.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCredits, getAvailableStates, getCreditTypes } from "../../apis/creditsApi";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors?.bg || "#fafafa"};
`;

const MarketplaceShell = styled.main`
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
  margin-bottom: 32px;

  h1 {
    margin: 0 0 12px;
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors?.ui900 || "#0f172a"};
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 26px;
    }
  }
`;

const FiltersBar = styled.div`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.ui200 || "#e5e7eb"};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FilterGroup = styled.div`
  flex: 1;
  min-width: 160px;

  label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.ui700 || "#374151"};
    margin-bottom: 6px;
  }

  select, input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid ${({ theme }) => theme.colors?.ui200 || "#e5e7eb"};
    border-radius: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors?.ui900 || "#0f172a"};
    background: #ffffff;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors?.primary500 || "#0ea5e9"};
    }
  }
`;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;

  .count {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};
  }

  .sort-controls {
    display: flex;
    gap: 8px;
    align-items: center;

    label {
      font-size: 13px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};
    }

    select {
      padding: 6px 10px;
      border: 1px solid ${({ theme }) => theme.colors?.ui200 || "#e5e7eb"};
      border-radius: 6px;
      font-size: 13px;
      background: #ffffff;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CreditCard = styled.div`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.ui200 || "#e5e7eb"};
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.15s ease-out;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &:hover {
    border-color: ${({ theme }) => theme.colors?.primary400 || "#38bdf8"};
    box-shadow: 0 4px 16px rgba(2, 132, 199, 0.12);
    transform: translateY(-2px);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
  }

  .type-badge {
    background: ${({ theme }) => theme.colors?.primary100 || "#e0f2ff"};
    color: ${({ theme }) => theme.colors?.primary700 || "#0369a1"};
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .price {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors?.ui900 || "#0f172a"};
  }

  .amount {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors?.ui700 || "#374151"};
    margin-top: -8px;
  }

  .location {
    font-size: 13px;
    color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};
    display: flex;
    align-items: center;
    gap: 4px;

    &::before {
      content: "📍";
    }
  }

  .seller {
    font-size: 13px;
    color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .verified {
    color: #16a34a;
    font-weight: 600;

    &::before {
      content: "✓ ";
    }
  }

  .description {
    font-size: 13px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    border-top: 1px solid ${({ theme }) => theme.colors?.ui100 || "#f3f4f6"};
    font-size: 12px;
    color: ${({ theme }) => theme.colors?.ui500 || "#6b7280"};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 64px 20px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors?.ui200 || "#e5e7eb"};
  border-radius: 16px;

  h2 {
    margin: 0 0 12px;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.ui900 || "#0f172a"};
  }

  p {
    margin: 0 0 24px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};
  }
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 64px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};
`;

const Marketplace = () => {
  const navigate = useNavigate();

  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all');
  const [filterState, setFilterState] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  const [availableStates, setAvailableStates] = useState([]);
  const [creditTypes, setCreditTypes] = useState({});

  useEffect(() => {
    loadMetadata();
  }, []);

  useEffect(() => {
    loadCredits();
  }, [filterType, filterState, sortBy, sortOrder]);

  const loadMetadata = async () => {
    try {
      const [states, types] = await Promise.all([
        getAvailableStates(),
        getCreditTypes(),
      ]);
      setAvailableStates(states);
      setCreditTypes(types);
    } catch (error) {
      console.error('Error loading metadata:', error);
    }
  };

  const loadCredits = async () => {
    setLoading(true);
    try {
      const data = await getCredits({
        type: filterType,
        state: filterState,
        sortBy,
        sortOrder,
      });
      setCredits(data);
    } catch (error) {
      console.error('Error loading credits:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <PageWrapper>
      <MarketplaceShell>
        <HeaderBlock>
          <h1>WaterQuality.Trading Marketplace</h1>
          <p>
            Browse verified nutrient reduction, stormwater, and thermal mitigation credits from trusted sellers.
          </p>
        </HeaderBlock>

        <FiltersBar>
          <FilterGroup>
            <label>Credit Type</label>
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="nutrient-reduction">Nutrient Reduction</option>
              <option value="stormwater">Stormwater Retention</option>
              <option value="thermal">Thermal Mitigation</option>
              <option value="saltwater">Saltwater Intrusion</option>
            </select>
          </FilterGroup>

          <FilterGroup>
            <label>State</label>
            <select value={filterState} onChange={(e) => setFilterState(e.target.value)}>
              <option value="all">All States</option>
              {availableStates.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </FilterGroup>
        </FiltersBar>

        {loading ? (
          <LoadingSpinner>Loading credits...</LoadingSpinner>
        ) : credits.length === 0 ? (
          <EmptyState>
            <h2>No Credits Found</h2>
            <p>
              Try adjusting your filters or check back soon for new listings.
            </p>
          </EmptyState>
        ) : (
          <>
            <ResultsHeader>
              <div className="count">
                {credits.length} {credits.length === 1 ? 'credit' : 'credits'} available
              </div>
              <div className="sort-controls">
                <label>Sort by:</label>
                <select
                  value={`${sortBy}-${sortOrder}`}
                  onChange={(e) => {
                    const [field, order] = e.target.value.split('-');
                    setSortBy(field);
                    setSortOrder(order);
                  }}
                >
                  <option value="date-desc">Newest First</option>
                  <option value="date-asc">Oldest First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="amount-desc">Amount: High to Low</option>
                  <option value="amount-asc">Amount: Low to High</option>
                </select>
              </div>
            </ResultsHeader>

            <Grid>
              {credits.map((credit) => (
                <CreditCard
                  key={credit.id}
                  onClick={() => navigate(`/marketplace/listing/${credit.id}`)}
                >
                  <div className="header">
                    <div className="type-badge">{credit.typeDisplay}</div>
                  </div>

                  <div className="price">${credit.totalPrice.toLocaleString()}</div>
                  <div className="amount">
                    {credit.amount.toLocaleString()} {credit.unit}
                  </div>

                  <div className="location">
                    {credit.location.county}, {credit.location.state}
                  </div>

                  <div className="seller">
                    <span>{credit.seller.name}</span>
                    {credit.seller.verified && <span className="verified">Verified</span>}
                  </div>

                  <div className="description">{credit.description}</div>

                  <div className="footer">
                    <span>Listed {formatDate(credit.listedDate)}</span>
                    <span>${credit.pricePerUnit.toFixed(2)}/{credit.unit.split(' ')[1] || 'unit'}</span>
                  </div>
                </CreditCard>
              ))}
            </Grid>
          </>
        )}
      </MarketplaceShell>
    </PageWrapper>
  );
};

export default Marketplace;
