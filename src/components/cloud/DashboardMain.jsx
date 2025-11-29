// /src/components/cloud/DashboardMain.jsx
import React from "react";
import styled from "styled-components";

const Page = styled.main`
  width: 100%;
  min-height: calc(100vh - 72px); /* subtract header */
  padding: 32px 20px 48px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;

  background: ${({ theme }) => theme.colors?.bg || "#fafafa"};

  @media (max-width: 600px) {
    padding: 20px 16px 40px;
  }
`;

const Shell = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.08);
  padding: 32px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 768px) {
    padding: 24px 20px 28px;
    border-radius: 16px;
  }
`;

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.ui900 || "#0f172a"};
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};
`;

const ViewsStrip = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ViewChip = styled.button`
  border-radius: 999px;
  border: 1px solid
    ${({ active, theme }) =>
      active
        ? theme.colors?.primary300 || "#7dd3fc"
        : theme.colors?.ui200 || "#e5e7eb"};
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  cursor: default;

  background: ${({ active, theme }) =>
    active ? theme.colors?.primary50 || "#e0f2ff" : "#ffffff"};
  color: ${({ active, theme }) =>
    active
      ? theme.colors?.primary700 || "#0369a1"
      : theme.colors?.ui800 || "#111827"};
`;

const DevicesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const DevicesTitle = styled.div`
  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.ui900 || "#0f172a"};
  }

  p {
    margin: 4px 0 0;
    font-size: 13px;
    color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};
  }
`;

const AddDeviceButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  background: ${({ theme }) => theme.colors?.primary600 || "#0284c7"};
  color: #ffffff;

  &:hover {
    background: ${({ theme }) => theme.colors?.primary700 || "#0369a1"};
  }
`;

const DevicesGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 12px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 640px) and (max-width: 899px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const DeviceCard = styled.div`
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors?.ui200 || "#e5e7eb"};
  padding: 16px 18px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.15s ease-out;

  &:hover {
    border-color: ${({ theme }) => theme.colors?.ui300 || "#d1d5db"};
    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
  }
`;

const DeviceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeviceName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.ui900 || "#0f172a"};
`;

const StatusPill = styled.span`
  border-radius: 999px;
  padding: 3px 8px;
  font-size: 11px;
  font-weight: 600;
  color: #ffffff;
  background: ${({ variant }) =>
    variant === "warning"
      ? "#f97316"
      : variant === "offline"
      ? "#dc2626"
      : "#16a34a"};
`;

const DeviceMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors?.ui600 || "#4b5563"};
`;

const FooterStrip = styled.div`
  margin-top: 4px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors?.ui500 || "#6b7280"};
`;

const EmptyDevicesState = styled.div`
  text-align: center;
  padding: 48px 20px;
  border: 2px dashed ${({ theme }) => theme.colors?.ui200 || "#e5e7eb"};
  border-radius: 12px;
  margin-top: 16px;
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

export default function DashboardMain() {
  // Show getting started banner for first-time users
  const showGettingStarted = true; // TODO: Set to false once user has devices

  return (
    <Page>
      <Shell>
        <HeaderBlock>
          <Title>BlueSignal Cloud Monitoring</Title>
          <Subtitle>
            Monitor your water quality sensors, soil probes, and environmental devices in real-time.
          </Subtitle>
        </HeaderBlock>

        {showGettingStarted && (
          <GettingStartedBanner>
            <h2>Welcome to BlueSignal Cloud</h2>
            <p>
              Connect LoRaWAN gateways, water quality buoys, soil NPK probes, and other devices to stream real-time environmental data.
            </p>
            <div className="actions">
              <BannerButton type="button">
                + Add Your First Device
              </BannerButton>
              <BannerButton className="secondary" type="button">
                View Documentation
              </BannerButton>
            </div>
          </GettingStartedBanner>
        )}

        <ViewsStrip>
          <ViewChip active>Environment</ViewChip>
          <ViewChip>Marketplace</ViewChip>
          <ViewChip>Finance</ViewChip>
          <ViewChip>Dashboard</ViewChip>
        </ViewsStrip>

        <div>
          <DevicesHeader>
            <DevicesTitle>
              <h2>Your Devices</h2>
              <p>Connect and monitor environmental sensors and IoT devices.</p>
            </DevicesTitle>
            <AddDeviceButton type="button">+ Add Device</AddDeviceButton>
          </DevicesHeader>

          <EmptyDevicesState>
            <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>
              No devices connected yet
            </p>
            <p style={{ fontSize: '13px', color: '#6b7280' }}>
              Add your first gateway, sensor, or probe to start monitoring.
            </p>
          </EmptyDevicesState>
        </div>
      </Shell>
    </Page>
  );
}