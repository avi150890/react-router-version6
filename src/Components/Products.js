import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  const [productData, setProductData] = useState([
    { id: 1, pname: 'Apples', price: '$200', shipping: '$3', desc: "Red kashmiri apples", img: "https://www.freepnglogos.com/uploads/apple-png/apple-icon-paradise-fruits-iconset-artbees-0.png" },
    { id: 2, pname: 'Bananas', price: '$40', shipping: '$2', desc: "Yelaniki bananas", img: "https://www.freepnglogos.com/uploads/banana-png/banana-maui-wowi-hawaiian-coffees-smoothies-23.png" },
    { id: 3, pname: 'Grapes', price: '$100', shipping: '$1', desc: "Black grapes", img: "https://www.freepnglogos.com/uploads/grapes-png/grapes-grape-red-transparent-png-stickpng-5.png" },
    { id: 4, pname: 'Oranges', price: '$80', shipping: '$3', desc: "Oranges big nagpur", img: "https://www.freepnglogos.com/uploads/orange-png/fruit-orange-png-image-pixabay-22.png" },
  ]);
  return (
    <div>
      <ul>
        {
          productData.map((prod) => {
            return (
              <li className='card'><Link state={prod} to={`/products/${prod.id}`} style={{ textDecoration: 'none' }}>
                <img src={prod.img} />
                <div className='text'>
                  <h3>{prod.pname}</h3>
                </div>
              </Link>
              </li>
            )
          })
        }
      </ul>
      <Outlet context={productData} />
    </div>
  )
}

export default Products