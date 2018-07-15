import React from 'react'

const Title = ({name, lastname}) => (
  <h1> Hello {`${name} ${lastname}`} </h1>
)

Title.defaultProps = {
  name: 'Unkown',
  lastname: 'Undefined'
}

export default Title
