import React from 'react';
import styled from 'styled-components'
import Section from './Section'

const Container = styled(Section)`
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media(max-width:${props=>props.theme.sm}) {
    img {
      width: 80%;
    }
  }
`

const Title = styled.img`
  margin-bottom: .5rem;
`

const Subtitle = styled.img`
  padding: .25rem 1rem;
  background: white;
  margin-bottom: 2.5rem;
`

const Line = styled.div`
  width: 20vmin;
  height: 4px;
  background: black;
  margin-bottom: 1rem;
`

export default function First() {
  return (
    <Container trans={true}>
      <Title src={require('./title.png')} alt='title' />
      <Line />
      <Subtitle src={require('./subtitle.png')} alt='subtitle' />
    </Container>
  )
}
