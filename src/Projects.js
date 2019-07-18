import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Col = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50%;
  margin-bottom: 1.5rem;
  div {
    padding: 1rem;
  }
  @media(max-width:${props => props.theme.sm}) {
    width: 100%;
    img {
      width: 40vw;
    }
  }
`

const More = styled.p`
  margin: 1rem 0;
  text-align: right;
  a {
    text-decoration: none;
    color: black;
  }
`

export default function Projects() {
  return (
    <Section>
        <h2>服务项目&nbsp;<small>PROJECTS</small></h2>
        <Grid>
          <Col>
            <img src={require("./huobip.png")} alt="huobip" />
            <div>
              <h4>火币优惠版</h4>
              <p>提供查询行情, 快讯, 计算器等功能</p>
              <p>同时可以节省手续费</p>
              <a href="/" className="button">查看详情</a>
            </div>
          </Col>
          <Col>
            <img src={require("./xys19.png")} alt="xys19" />
            <div>
              <h4>道地易通</h4>
              <p>国内首家基于区块链技术的"电商交易平台"</p>
              <a href="/" className="button">查看详情</a>
            </div>
          </Col>
        </Grid>
        <More>
          <a href="/">查看更多</a>
        </More>
      </Section>
  )
}

