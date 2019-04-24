import { css, createGlobalStyle } from 'styled-components'

export const theme = {
  black: "#212129",
  white: "#FEFEFE",
  gray: "#9F9FA3",
  deeporange: "#FF5722",
  innerShadow: 'inset -2px 4px 8px rgba(0, 0, 0, 0.25)'
}

const screenBreak = {
  mobile: 992,
  phone: 650,
  small: 480
}

export const hover = inner => css`
  &:hover,
  &:focus {
    ${inner}
  }
`

export const media = {
  mobile: inner => css`
    @media (max-width: ${screenBreak.mobile / 16}em) {
      ${inner}
    }
  `,
  phone: inner => css`
    @media (max-width: ${screenBreak.phone / 16}em) {
      ${inner}
    }
  `,
  small: inner => css`
    @media (max-width: ${screenBreak.small / 16}em) {
      ${inner}
    }
  `,
  custom: (n, inner) => css`
    @media (max-width: ${n / 16}em) {
      ${inner}
    }
  `,

  medium: inner => css`
    @media (min-width: ${screenBreak.medium / 16}em) {
      ${inner}
    }
  `,
  xlarge: inner => css`
    @media (min-width: ${screenBreak.xlarge / 16}em) {
      ${inner}
    }
  `,
  xxlarge: inner => css`
    @media (min-width: ${screenBreak.xxlarge / 16}em) {
      ${inner}
    }
  `
}

const defaultFont = [
  'Roboto',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  '"Helvetica Neue"',
  'sans-serif'
].join()


export const fontSize = size => css`
  font-size: ${size}rem;

  ${media.mobile(css`
    font-size: ${size - (size/12)}rem;
  `)}

  ${media.phone(css`
    font-size: ${size - (size/10)}rem;
  `)}

  ${media.xxlarge(css`
    font-size: ${size * 1.2}rem;
  `)}
`

const typography = css`
  h1 { ${fontSize(3.2)}; }
  h2 { ${fontSize(2.4)}; }
  h3 { ${fontSize(1.9)}; }

  a {
    text-decoration: none;
    color: ${theme.black};

      &:hover,
      &:active,
      &:focus {
        text-decoration: none;
      }
    }
`

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: 0.02rem;
    font-family: ${defaultFont};
    text-rendering: optimizeLegibility;
    color: ${theme.black}
  }

  *::selection {
    color: ${theme.black};
    background: ${theme.white};
  }

  ${typography}
`
