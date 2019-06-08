/** @jsx jsx */
import {jsx} from '@emotion/core'

const Container = (props) => (
  <div css={{
    width: '90%',
    maxWidth: '700px',
    margin: 'auto',
    marginTop: '3rem',
    backgroundColor: 'hotpink',
    padding: '3rem',
    maxWidth: '1200px',
    '@media (min-width: 736px)': {
      width: '80%',
      maxWidth: '1200px'
    }
  }} {...props} />
)

export default Container