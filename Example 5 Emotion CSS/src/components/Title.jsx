/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const Title = (props) => (
  <h1 css={css`
    font-size: 6rem;
  `} {...props} />
)

export default Title