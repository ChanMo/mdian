import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Grid = styled.div`
  display: flex;
  flex-direction: column;
`

const Col = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  div {
    padding: 0 1rem;
  }
  &:nth-child(2n) {
    align-self: flex-end;
    text-align: right;
    flex-direction: row-reverse;
  }
  &:nth-child(2n+1) {
    align-self: flex-start;
  }
  @media(max-width:${props=>props.theme.sm}) {
    img {
      width: 30vw;
    }
    &:nth-child(2n) {
      align-self: flex-start;
      text-align: left;
      flex-direction: row;
    }
  }
`

const list = [
  ['更专业', require("./01.png"), '5年创业APP的定制服务经验, 让您的想法真正变成产品'],
  ['更前沿', require("./02.png"), '使用最新的开发技术, 探讨最潮流的设计, 及时掌握新兴行业动态'],
  ['更高效', require("./03.png"), '基于敏捷开发的完善开发流程, 让开发更高效, 令时间更有价值'],
  ['更有活力', require("./04.png"), '年轻, 有活力的开发小团队, 渴望机遇, 充满激情']
]

export default function Advances() {
  return (
    <Section>
      <h2>我们的优势&nbsp;<small>ADVANCES</small></h2>
      <Grid>
        {list.map((item,index) => (
        <Col key={index}>
          <img src={item[1]} alt={item[0]} />
          <div>
            <h4>{item[0]}</h4>
            <p>{item[2]}</p>
          </div>
        </Col>
        ))}
      </Grid>
    </Section>
  )
}
