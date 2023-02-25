import React from 'react';
import { useLocation, useOutletContext, useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const prodObj = useOutletContext();
  //const location = useLocation();
  return (
    <div className='prodDetailContainer'>
      <div className='imgContainer'>
        <img src={prodObj[id-1].img} />
      </div>
      <div className='details'>
          <h2>{prodObj[id - 1].pname} @ {prodObj[id - 1].price}</h2>
          <h3>{prodObj[id - 1].desc} </h3>
          <h4>Shipping: {prodObj[id - 1].shipping} </h4>
      </div>
      {/* when we use useLocation hook
       <h2>{JSON.stringify(location.state)}</h2> 
      */}
    </div>
  )
}

export default ProductDetail