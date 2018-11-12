import { css, createGlobalStyle } from 'styled-components'

export const theme = {
  black: "#212129",
  white: "#F9F9FA",
  gray: "#9F9FA3",
  deeporange: "#FF5722",
  innerShadow: 'inset -2px 4px 8px rgba(0, 0, 0, 0.25)'
}

const screenBreak = {
  mobile: 992,
  phone: 650,
  small: 480
}

export const flex = opt => css`
  display: flex;

  flex-direction: ${opt.dir|| "row"};
  justify-content: ${opt.x || "center"};
  align-items: ${opt.y || "center"};
`

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


export const fontS = size => css`
  font-size: ${size}rem;

  ${media.mobile(css`
    font-size: ${size - (size/5)}rem;
  `)}

  ${media.phone(css`
    font-size: ${size - (size/4)}rem;
  `)}
`

const typography = css`
  h1 { ${fontS(3.2)}; }
  h2 { ${fontS(2.4)}; }
  h3 { ${fontS(1.9)}; }

  a {
    text-decoration: none;
    color: ${theme.black};

      &:hover,
      &:active,
      &:focus {
        text-decoration: underline;
        color: ${theme.deeporange};
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
    color: ${theme.black}
  }

  *::selection {
    color: ${theme.white};
    background: ${theme.black};
  }

  ${typography}
`
