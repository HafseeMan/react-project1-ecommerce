import React from 'react'


export default function CartItem({item,value}){
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            {/*Product image */}
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} 
                style={{width:"5rem", height:"5rem"}} 
                className="img rounded-circle" 
                alt="product"
                />
            </div>

            {/*Product Name */}
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Product : </span>
            {title}
            </div>
            
            {/*Product price*/}
            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Price : </span>
            {price}
            </div>

            {/*Product amount*/}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span className="btn btn-outline-light text-dark bold bg-bright mx-1" onClick={()=>decrement(id)}>
                        -
                    </span>
                    <span className="btn bg-dark text-light">
                        {count}
                    </span>
                    <span className="btn btn-outline-light text-dark bold bg-bright mx-1" onClick={()=>increment(id)}>
                        +
                    </span>

                </div>
            </div>
            {/* delete */}
            <div className="col-10 mx-auto col-lg-2">
               <div className="btn bg-light text-danger cart-icon" onClick={()=>removeItem(id)}>
                   Delete <i className="fas fa-trash"></i>
               </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>Item Total : N </strong>
                {total}
            </div>
        </div>
    )
}