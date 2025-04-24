import styled from 'styled-components'

const Heading = styled.h1`
${props => props.as === 'h1' && `font-size: 2.5em;`}
${props => props.as === 'h3' && 'font-size: 1.5em;'}
  text-align: center;
`

export default Heading;