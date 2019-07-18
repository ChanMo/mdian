import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Header = styled.div`
  text-align: right;
  margin-bottom: 2rem;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Col = styled.div`
  width: 50%;
  padding: 1.5rem;
  box-sizing: border-box;
  @media(max-width:720px) {
    width: 100%;
  }
  img {
    margin-bottom: 1rem;
  }
`

const list = [
  ['APP', require("./app.png"), '使用ReactNative框架, 成本低，开发效率提高40%， 同时又有媲美原生应用的性能和用户体验'],
  ['小程序', require("./wxa.png"), '采用原生小程序技术, 根据小程序的特性进行定制化开发'],
  ['区块链', require("./blocklian.png"), '基于ETH, EOS的DAPP合约开发，完整的数字货币交易所, 钱包, 理财APP开发经验'],
  ['PC网站', require("./pc.png"), '基于React进行前后端分离的应用型网站开发, 基于WordPress快速搭建企业官网'],
]

export default function Services() {
  return (
    <Section>
      <Header>
        <h2>服务范围<br /><small>SERVICES</small></h2>
        <p>提供APP, 小程序, 区块链, 网站等开发, 涉及行业包括区块链金融, 传统金融, 新型医疗, 物联网, 租房, 教育等.</p>
      </Header>
      <Grid>
          {list.map((item,index) => (
            <Col key={index}>
              <h3>- {item[0]}</h3>
              <img src={item[1]} alt={item[0]} />
              <p>{item[2]}</p>
            </Col>
          ))}
      </Grid>
    </Section>
  )
}
