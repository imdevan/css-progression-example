import styled from '@emotion/styled'

const StyledParagraph = styled.p`
  ${({fontSize}) => `
    font-size: ${fontSize}
  `};
`

StyledParagraph.defaultProps = {
  fontSize: '2rem'
}

export default StyledParagraph