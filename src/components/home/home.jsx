import React from 'react'
import CustomCard from '../UI/card'
import {Row} from 'react-bootstrap'

function home({data}) {
  return (
    <div>
      <Row xs={2} md={3} className="g-4">
  {data.map((el,key)=>
      <CustomCard el={el}/>
  )} 
  </Row>
    </div>
  )
}

export default home