import React from 'react'

const Container = (props) => (
  <div style={{
    width: '80%',
    margin: 'auto',
    marginTop: '3rem',
    backgroundColor: 'lightblue',
    padding: '3rem',
    maxWidth: '1200px',
  }} {...props} />
)

export default Container