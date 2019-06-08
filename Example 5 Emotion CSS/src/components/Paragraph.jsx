/** @jsx jsx */
import {jsx, css} from '@emotion/core'

const Paragraph = (props) => (
  <p css={css` font-size: 2em; `} {...props} />
)

export default Paragraph