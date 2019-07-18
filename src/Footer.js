import React from 'react'
import styled from 'styled-components'

const Container = styled.p`
  background-color: rgba(0,0,0,0.65);
  color: rgba(255,255,255,0.8);
  text-align: center;
  margin: 0;
  padding: 1rem;
`

export default function Footer() {
  const text = 'Copy Right © 济南漫点信息科技有限公司版权所有 鲁ICP备19017316号'
  return (
    <Container>{text}</Container>
  )
}

