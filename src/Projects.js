import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const list = [
  ['278', 'NB智能锁', require("./yunjia.png"), '获得联通投资，全市渠道支持'],
  ['246', '道地易通', require("./xys19.png"), '国内首家基于区块链技术的"电商交易平台"']
]


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
  a img {
    width: 1.5rem;
    height: 1.5rem;
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
            {list.map((item,index) => (
          <Col key={index}>
            <img src={item[2]} alt={item[1]} />
            <div>
              <h4>{item[1]}</h4>
              <p>{item[3]}</p>
              <a href={'https://cms.mandiankeji.com/?page_id='+item[0]}>
                <img src={require('./go.png')} alt="go" />
              </a>
            </div>
          </Col>
            ))}
        </Grid>
        <More>
          <a href="https://cms.mandiankeji.com">查看更多</a>
        </More>
      </Section>
  )
}

