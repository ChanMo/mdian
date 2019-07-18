import React from 'react';
import styled from 'styled-components'
import Section from './Section'

const Main = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  img {
    margin-right: 1rem;
  }
  @media(max-width:${props=>props.theme.sm}) {
    img {
      margin: 0
    }
  }
`

const Title = styled.h2`
  text-align: right;
`

export default function Aboutus() {
  return (
    <Section>
      <Title>ABOUT<br />US<br />关于我们</Title>
      <Main>
        <img src={require("./aboutus.png")} alt="aboutus" />
        <div>
          <h4>济南漫点信息技术有限公司</h4>
          <p>专业,独特的产品设计理论, 完全定制化研发, 高效的开发流程, 助您迈出创业第一步. </p>
          <p>不止是写代码, 我们替您梳理产品需求, 确定产品功能, 制定产品设计方案, 规划升级 </p>
           <p>曾帮客户打造多款精品应用，获得千万级项目融资，区块链合约项目单日最高盈利70万</p>
        </div>
      </Main>
    </Section>
  )
}
