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
  p {
    color: white;
  }
  @media(max-width:${props=>props.theme.sm}) {
    flex-direction: column;
    align-items: flex-start;
    div {
      text-align: left;
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
          <p>mandiankeji@163.com 邮箱</p>
          <p>13145312751 电话</p>
          <p>mandian1927 微信</p>
          <p>高新区汇东国际1号楼 地址</p>
        </div>
      </Grid>
    </Section>
  )
}
