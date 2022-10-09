import { css } from 'styled-components'

const screenBreak = {
  mobile: 992,
  phone: 650,
  small: 480,
}

export const media = {
  mobile: (inner) => css`
    @media (max-width: ${screenBreak.mobile / 16}em) {
      ${inner}
    }
  `,
  phone: (inner) => css`
    @media (max-width: ${screenBreak.phone / 16}em) {
      ${inner}
    }
  `,
  small: (inner) => css`
    @media (max-width: ${screenBreak.small / 16}em) {
      ${inner}
    }
  `,
  custom: (n, inner) => css`
    @media (max-width: ${n / 16}em) {
      ${inner}
    }
  `,
}

export const theme = {
  primary: '#212129',
  secondary: '#FEFEFE',
  accent: '#78ffaa',
  gray: '#9F9FA3',
  softGray: '#9F9FA31a',
  globalWidth: 720,
  headerHeight: {
    desktop: 220,
    mobile: 110,
  },
  media,
  globalMargin: (val = 40) => css`
    margin-top: ${val}px;
    ${media.phone(css`
      margin: 40px 0;
    `)}
  `,
}
