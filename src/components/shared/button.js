import styled, { css } from 'styled-components'

export const Button = styled.button(({ theme }) => css`
  background: transparent;
  cursor: pointer;
  height: 28px;
  padding: 0 10px;
  border: 1px solid ${theme.softGray};
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${theme.primary};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    display: inline-block;
    fill: ${theme.primary};
  }

  &:hover,
  &:active,
  &:focus {
    border: 1px solid ${theme.primary};
    color: ${theme.primary};

    svg {
      fill: ${theme.primary};
    }
  }
`)