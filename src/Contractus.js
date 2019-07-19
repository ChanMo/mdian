import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Grid = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  div {
    text-align: right;
    margin-right: 1rem;
  }
  img {
    border: 3px solid black;
    margin-bottom: .5rem;
  }
  p {
    color: white;
  }
  span {
    margin-right: .5rem;
  }
  @media(max-width:${props=>props.theme.sm}) {
    flex-direction: column;
    align-items: flex-start;
    div {
      text-align: left;
    }
    p {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
  }
`

export default function Contractus() {
  return (
    <Section trans={true}>
      <h2>联系我们<br /><small>CONTACT US</small></h2>
      <Grid>
        <img src={require("./qrcode.png")} alt="qrcode" />
        <div>
          <p><span>mandiankeji@163.com</span><span>邮箱</span></p>
          <p><span>13145312751</span><span>电话</span></p>
          <p><span>mandian1927</span><span>微信</span></p>
          <p><span>高新区汇东国际1号楼</span><span>地址</span></p>
        </div>
      </Grid>
    </Section>
  )
}
