// /src/components/shared/Card/Card.jsx
import styled, { css } from "styled-components";

// Base Card with modern styling
export const Card = styled.div`
  background: #FFFFFF;
  border: 1px solid ${({ theme }) => theme.colors?.ui200 || "#E5E7EB"};
  border-radius: ${({ theme }) => theme.borderRadius?.md || "16px"};
  padding: ${({ $padding }) => $padding || "24px"};
  transition: all 0.2s ease-out;
  position: relative;

  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;

      &:hover {
        border-color: ${({ theme }) => theme.colors?.primary300 || "#5DC9CC"};
        box-shadow: 0 4px 16px rgba(29, 112, 114, 0.12);
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    `}

  ${({ $elevated }) =>
    $elevated &&
    css`
      border: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08),
        0 2px 4px rgba(0, 0, 0, 0.04);

      &:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12),
          0 4px 8px rgba(0, 0, 0, 0.06);
      }
    `}

  ${({ $glass }) =>
    $glass &&
    css`
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    `}
`;

// Card Header
export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: ${({ $noDivider }) => ($noDivider ? "16px" : "20px")};
  padding-bottom: ${({ $noDivider }) => ($noDivider ? "0" : "16px")};
  border-bottom: ${({ $noDivider, theme }) =>
    $noDivider ? "none" : `1px solid ${theme.colors?.ui100 || "#F4F5F7"}`};
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.ui900 || "#111827"};
  letter-spacing: -0.01em;
`;

export const CardSubtitle = styled.p`
  margin: 4px 0 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.ui500 || "#6B7280"};
  line-height: 1.5;
`;

export const CardHeaderContent = styled.div`
  flex: 1;
`;

export const CardHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

// Card Body
export const CardBody = styled.div`
  ${({ $scrollable }) =>
    $scrollable &&
    css`
      max-height: ${$scrollable};
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    `}
`;

// Card Footer
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $align }) => $align || "flex-end"};
  gap: 12px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors?.ui100 || "#F4F5F7"};

  ${({ $noDivider }) =>
    $noDivider &&
    css`
      border-top: none;
      padding-top: 0;
    `}
`;

// Metric Card - for displaying stats/KPIs
export const MetricCard = styled(Card)`
  text-align: ${({ $centered }) => ($centered ? "center" : "left")};

  .metric-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: ${({ $color, theme }) => {
      if ($color === "success") return theme.colors?.success50 || "#ECFDF5";
      if ($color === "warning") return theme.colors?.warning50 || "#FFFBEB";
      if ($color === "danger") return theme.colors?.red50 || "#FEF2F2";
      return theme.colors?.primary50 || "#E6F7F8";
    }};
    color: ${({ $color, theme }) => {
      if ($color === "success") return theme.colors?.success600 || "#059669";
      if ($color === "warning") return theme.colors?.warning600 || "#D97706";
      if ($color === "danger") return theme.colors?.red600 || "#DC2626";
      return theme.colors?.primary600 || "#196061";
    }};
    margin-bottom: 12px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .metric-label {
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors?.ui500 || "#6B7280"};
    margin-bottom: 4px;
  }

  .metric-value {
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors?.ui900 || "#111827"};
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .metric-change {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    font-weight: 600;
    margin-top: 8px;
    padding: 4px 8px;
    border-radius: 6px;

    &.positive {
      color: ${({ theme }) => theme.colors?.success600 || "#059669"};
      background: ${({ theme }) => theme.colors?.success50 || "#ECFDF5"};
    }

    &.negative {
      color: ${({ theme }) => theme.colors?.red600 || "#DC2626"};
      background: ${({ theme }) => theme.colors?.red50 || "#FEF2F2"};
    }
  }

  .metric-subtitle {
    font-size: 13px;
    color: ${({ theme }) => theme.colors?.ui500 || "#6B7280"};
    margin-top: 4px;
  }
`;

// List Card - for displaying lists of items
export const ListCard = styled(Card)`
  padding: 0;
  overflow: hidden;
`;

export const ListCardHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.ui100 || "#F4F5F7"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.ui900 || "#111827"};
  }
`;

export const ListCardItem = styled.div`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: background 0.15s ease-out;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.ui100 || "#F4F5F7"};

  &:last-child {
    border-bottom: none;
  }

  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.colors?.ui50 || "#FAFAFA"};
      }
    `}
`;

// Card Grid for layouts
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${({ $minWidth }) => $minWidth || "280px"}, 1fr));
  gap: ${({ $gap }) => $gap || "16px"};
`;

// Empty State Card
export const EmptyCard = styled(Card)`
  text-align: center;
  padding: 48px 24px;
  background: ${({ theme }) => theme.colors?.ui50 || "#FAFAFA"};

  .empty-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors?.ui100 || "#F4F5F7"};
    color: ${({ theme }) => theme.colors?.ui400 || "#9CA3AF"};
    margin-bottom: 16px;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  .empty-title {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors?.ui700 || "#374151"};
    margin: 0 0 8px;
  }

  .empty-description {
    font-size: 14px;
    color: ${({ theme }) => theme.colors?.ui500 || "#6B7280"};
    margin: 0 0 20px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;
  }
`;
