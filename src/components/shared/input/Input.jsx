import styled from "styled-components";

export const Input = styled.input`
  background: ${({ theme, error }) =>
    error ? theme.colors.red50 : theme.colors.ui50};
  height: ${({ theme }) => theme.formHeightMd};
  padding: 0px 12px;

  border-radius: ${({ theme }) => theme.borderRadius.default};
  color: ${({ theme }) => theme.colors.ui800};
  margin: 0px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red300 : theme.colors.ui300)};
  transition: border-color 0.15s ease-out, box-shadow 0.15s ease-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary500};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary50};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.ui100};
    color: ${({ theme }) => theme.colors.ui500};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.ui400};
  }
`;
