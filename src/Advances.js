import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Grid = styled.div`
  display: flex;
  flex-direction: column;
`

const Cover = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  background: #999;
  img {
    position: absolute;
    top: 0;
    left: 0;
    transition: top 1s, left 1s;
  }
  @media(max-width:${props=>props.theme.sm}) {
    min-width: 30vw;
    min-height: 30vw;
    width: 30vw;
    height: 30vw;
    img {
      position: relative;
      width: 30vw;
    }
  }
`

const Content = styled.div`
  padding: 0 1.5rem;
  @media(max-width:${props=>props.theme.sm}) {
    padding: 0 1rem;
  }
`

const Col = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  &:nth-child(2n) {
    align-self: flex-end;
    text-align: right;
    flex-direction: row-reverse;
  }
  &:nth-child(2n+1) {
    align-self: flex-start;
  }
  @media(min-width:${props=>props.theme.sm}) {
    &:hover img {
      top: 0.8rem;
      left: 0.8rem;
    }
  }
  @media(max-width:${props=>props.theme.sm}) {
    align-items: center;
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
          <Cover>
            <img src={item[1]} alt={item[0]} />
          </Cover>
          <Content>
            <h4>{item[0]}</h4>
            <p>{item[2]}</p>
          </Content>
        </Col>
        ))}
      </Grid>
    </Section>
  )
}
