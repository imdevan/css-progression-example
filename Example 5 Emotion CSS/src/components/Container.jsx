/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const Container = (props) => (
  <div css={css`
  width: 90%;
  max-width: 700px;
  margin: auto;
  padding: 3rem;
  margin-top: 3rem;
  background-color: magenta;

  @media (min-width: 736px) {
    width: 80%;
    max-width: 1200px;
  }
`} {...props} />
)

export default Container