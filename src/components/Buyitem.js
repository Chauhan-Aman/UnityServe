import React from 'react'

const Buyitem = (props) => {

  const { product } = props

  return (
    <>
      <div className='col-md-3 my-3'>
        <div className="product_box card-cover overflow-hidden  rounded-4 mx-3 ">
          <div className="d-flex flex-column h-100 p-5 text-shadow-1 text-center" id="innercard">
            <h4 className="display-7 lh-1 fw-bold py-2">{product.Product_Name}</h4>
            <img src={product.Image} alt="" className="product_image" />
            <p className="services_box_text lead ">{product.Description}</p>
            <p className="services_box_text">{product.Owner_Name}</p>
            <a href="/"><button type="button" className="btn btn-outline-info text-xs" id="buy_button">BUY NOW</button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buyitem