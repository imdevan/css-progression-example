import styled from '@emotion/styled'

const StyledTitle = styled.h1`
  ${({fontSize}) => `
    font-size: ${fontSize}
  `};
`

StyledTitle.defaultProps = {
  fontSize: '6rem'
}

export default StyledTitle