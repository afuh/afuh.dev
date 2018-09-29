import { css } from 'styled-components'

const percentage = num => parseFloat(Number(num * 100).toFixed(1))

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
  lg: inner => css`
    @media (max-width: ${1200 / 16}em) {
      ${inner}
    }
  `,
  md: inner => css`
    @media (max-width: ${992 / 16}em) {
      ${inner}
    }
  `,
  sm: inner => css`
    @media (max-width: ${768 / 16}em) {
      ${inner}
    }
  `,
  xs: inner => css`
    @media (max-width: ${480 / 16}em) {
      ${inner}
    }
  `,
  custom: (n, inner) => css`
    @media (max-width: ${n / 16}em) {
      ${inner}
    }
  `
}

export const grid = arg => {
  if (typeof arg !== 'object') return

  if (Array.isArray(arg)) {
    const [col = 1, total = 12, gutter = 0] = arg

    const grid = percentage(col/total)
    const gut = percentage(gutter/200)

    return css`
      margin: ${gut + "%"};
      flex-basis: ${grid - gutter + "%"};
    `
  }
}
