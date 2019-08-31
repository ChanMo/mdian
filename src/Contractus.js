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
  a {
    color: white;
    margin-right: .5rem;
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
          <p><a href="mailto:mandiankeji@163.com">mandiankeji@163.com</a><span>邮箱</span></p>
          <p><a href="tel://13145312751">13145312751</a><span>电话</span></p>
          <p><span>mandian1927</span><span>微信</span></p>
          <p><a href="https://uri.amap.com/marker?position=117.10966,36.694592">山东济南高新区汇东国际1号楼</a><span>地址</span></p>
        </div>
      </Grid>
    </Section>
  )
}
