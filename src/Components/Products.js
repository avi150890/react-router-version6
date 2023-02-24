import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
       <ul>
        <li><Link to='/products/1' style={{textDecoration:'none'}}>Apples</Link></li>
        <li><Link to='/products/2' style={{textDecoration:'none'}}>Bannanas</Link></li>
        <li><Link to='/products/3' style={{textDecoration:'none'}}>Grapes</Link></li>
        <li><Link to='/products/4' style={{textDecoration:'none'}}>Oranges</Link></li>
      </ul>
    </div>
  )
}

export default Products