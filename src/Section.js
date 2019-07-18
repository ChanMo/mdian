import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  background-color: ${props => props.trans ? 'transparent': 'white'};
`

const Inner = styled.div`
  width: ${props => props.theme.width};
  max-width: 100%;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  box-sizing: border-box;
`

export default class Section extends React.Component {
  render () {
    const { trans, children, ...rest} = this.props
    return (
      <Box trans={trans}>
        <Inner {...rest}>{children}</Inner>
      </Box>
    )
  }
}
