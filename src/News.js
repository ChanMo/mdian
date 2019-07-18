import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  img {
    margin-right: 1rem;
    width: 30vmin;
  }
  @media(max-width:${props=>props.theme.sm}) {
    img {
      width: 100%;
      margin: 0 0 .5rem;
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

const Date = styled.div`
  font-weight: bold;
  margin-right: 1rem;
`

export default function News() {
  return (
    <Section>
      <h2>漫点动态<br /><small>NEWS</small></h2>
      <Item>
        <Date>2019.09.09</Date>
        <img src="http://y0.ifengimg.com/d4a44fff10624b98/2013/0225/rdn_512abfa7f0873.jpg" alt="news1" />
        <div>
        <h5>从产品角度, 看小程序设计</h5>
        <p>6年多的时间，帮客户设计的小程序，大大小小几十个，有些运营的很好，有些却水土不服，今天就来聊聊小程序的设计思考</p>
        <a href="/">></a>
        </div>
      </Item>
      <More>
        <a className="more" href="/">查看更多</a>
      </More>
    </Section>
  )
}


