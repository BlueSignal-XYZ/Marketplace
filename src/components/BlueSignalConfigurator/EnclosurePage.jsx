// Standalone Enclosure View Page for /sales/enclosure route
import React, { useState } from "react";
import styled from "styled-components";
import { PRODUCTS } from "./data";
import { EnclosureView } from "./components/diagrams";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  padding: 20px;
`;

const ProductSelector = styled.div`
  max-width: 1000px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
`;

const SelectorLabel = styled.label`
  font-family: "SF Mono", Consolas, monospace;
  font-size: 12px;
  color: #00ff88;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ProductSelect = styled.select`
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid #00ff88;
  border-radius: 4px;
  padding: 8px 16px;
  font-family: "SF Mono", Consolas, monospace;
  font-size: 13px;
  color: #00ff88;
  cursor: pointer;
  outline: none;

  &:hover {
    background: rgba(0, 255, 136, 0.15);
  }

  &:focus {
    box-shadow: 0 0 8px rgba(0, 255, 136, 0.3);
  }

  option {
    background: #1a1a1a;
    color: #00ff88;
  }
`;

const EnclosurePage = () => {
  const [selectedProduct, setSelectedProduct] = useState("s-ac");
  const product = PRODUCTS[selectedProduct];

  return (
    <PageWrapper>
      <ProductSelector>
        <SelectorLabel htmlFor="product-select">Select Product:</SelectorLabel>
        <ProductSelect
          id="product-select"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          {Object.values(PRODUCTS).map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} - {p.subtitle}
            </option>
          ))}
        </ProductSelect>
      </ProductSelector>

      <EnclosureView product={product} />
    </PageWrapper>
  );
};

export default EnclosurePage;
