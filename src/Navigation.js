import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import logo from './logo.png';

const Box = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 1rem;
  box-sizing: border-box;
  img {
    height: 2.8rem;
  }
  @media(max-width:${props=>props.theme.sm}) {
    img {
      height: 2rem;
    }
  }
`

const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  @media(max-width:${props=>props.theme.sm}) {
    display: none;
  }
  a {
    padding: .5rem 1rem;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }
`

const NavItem = styled.li`
  display: inline-block;
`

export default function Navigation() {
  return (
    <Box trans={true}>
      <img src={logo} alt="logo" />
      <Nav>
        <NavItem><a href="/">首页</a></NavItem>
        <NavItem><a href="https://cms.mandiankeji.com">服务项目</a></NavItem>
        <NavItem><a href="https://cms.mandiankeji.com">漫点动态</a></NavItem>
      </Nav>
    </Box>
  )
}
