import React from 'react'
import styled from "styled-components"
import { FaExternalLinkAlt } from 'react-icons/fa'

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: right;
  font-size: 14px;
  font-weight: 200;
  padding: 6px;
  color: #666;
`

const Icon = styled.a.attrs({
  href: 'https://afuh.surge.sh/'
})`
  border: none;
  padding-right: 14px;
  color: #666;
`

const Text = styled.span`
  font-style: italic;
  margin-right: 10px;
`
const Footer = () => (
  <Wrapper>
    <Icon>
      <Text>last year portfolio</Text>
      <FaExternalLinkAlt />
    </Icon>
  </Wrapper>
)

export default Footer
