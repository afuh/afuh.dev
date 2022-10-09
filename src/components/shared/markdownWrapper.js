import styled, { css } from 'styled-components'

export const MarkdownWrapper = styled.section(
  ({ theme }) => css`
    max-width: ${theme.globalWidth}px;
    margin-top: 20px;

    h2,
    h3 {
      margin-top: 40px;
      margin-bottom: 8px;
    }

    p,
    li {
      margin-top: 0;
      font-size: 1.8rem;
      line-height: 1.7;
    }

    a {
      box-shadow: inset 0 -0.3rem ${theme.accent};
      &:hover,
      &:active,
      &:focus {
        box-shadow: inset 0 -3rem ${theme.accent};
        color: ${theme.primary};
      }
    }

    ul {
      padding-left: 20px;

      li {
        display: list-item;
        text-align: match-parent;
      }
    }

    hr {
      display: block;
      height: 2px;
      width: 120px;
      background-color: ${theme.softGray};
      margin: 30px auto;
      border-width: 0;
    }

    blockquote {
      border-left: 4px solid ${theme.softGray};
      padding-left: 20px;
      margin-left: 0;
      font-style: italic;
    }
  `,
)
