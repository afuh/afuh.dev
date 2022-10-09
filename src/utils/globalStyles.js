import { css, createGlobalStyle } from 'styled-components'

const defaultFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  '"Helvetica Neue"',
  'sans-serif',
].join()

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    ${({ theme }) => css`
      color: ${theme.primary};
      background: ${theme.secondary};
      *::selection {
        color: ${theme.primary};
        background: ${theme.accent};
      }
    `};
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: 0.02rem;
    font-variant-ligatures: none;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    text-decoration-skip-ink: auto;
    font-family: ${defaultFont};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
    }
  }
  .gatsby-image-wrapper img[src*="base64"] {
    -ms-interpolation-mode: nearest-neighbor;
    image-rendering: pixelated;
  }
`
