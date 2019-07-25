import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const list = [
  [288, '租房痛点如何解决？来看看区块链技术', 'http://image.woshipm.com/wp-files/2018/08/7GFD9p3xF3GE9Kzn3hvS.jpg!v.jpg', '在租房的问题上，很多人或多或少都遇到过一些问题，那针对于这些问题，要怎样更好的去解决呢？', '2019.07.25'],
  [192, '从产品角度，看小程序的设计', 'https://cms.mandiankeji.com/wp-content/uploads/2019/07/rdn_512abfa7f0873.jpg', '6年多的时间，帮客户设计的小程序，大大小小几十个，有些运营的很好，有些却水土不服，今天就来聊聊小程序的设计思考', '2019.05.14']
]

const Item = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  img {
    margin-right: 1rem;
    width: 30vmin;
  }
  @media(max-width:${props=>props.theme.sm}) {
    flex-wrap: wrap;
    img {
      width: 100%;
      margin: 0 0 .5rem;
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

const Date = styled.div`
  font-weight: bold;
  margin: 0 1rem 1rem 0;
  font-size: 1.5rem;
  color: #dcdcdc;
`

export default function News() {
  return (
    <Section>
      <h2>漫点动态<br /><small>NEWS</small></h2>
        {list.map((item,index) => (
      <Item key={index}>
        <Date>{item[4]}</Date>
        <img src={item[2]} alt={item[0]} />
        <div>
        <h5>{item[1]}</h5>
        <p>{item[3]}</p>
        <a href={"https://cms.mandiankeji.com/?page_id="+item[0]}>
          <img src={require('./go.png')} alt='go' />
        </a>
        </div>
      </Item>
        ))}
      <More>
        <a href="https://cms.mandiankeji.com">查看更多</a>
      </More>
    </Section>
  )
}


