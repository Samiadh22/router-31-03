import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
function Input() {
  return (
    <div>
      <InputGroup className="mb-3">
    
    <FormControl
      placeholder="Search"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
    </div>
  )
}

export default Input