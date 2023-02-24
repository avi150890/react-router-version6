import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
       <ul>
        <li><Link to='/product/1' style={{textDecoration:'none'}}>Apples</Link></li>
        <li><Link to='/product/2' style={{textDecoration:'none'}}>Bannanas</Link></li>
        <li><Link to='/product/3' style={{textDecoration:'none'}}>Grapes</Link></li>
        <li><Link to='/product/4' style={{textDecoration:'none'}}>Oranges</Link></li>
      </ul>
    </div>
  )
}

export default Products