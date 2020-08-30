import React from 'react'

export default function Buy({value}){
    const {clearCart} =  value;    
        return (
            <React.Fragment>
                        <div className="mx-auto text-capitalize text-left">
                                <button className="btn btn-outline-success text-uppercase mb-3 px-5" 
                                type="button"
                                onClick={()=>clearCart()}
                                >
                                    Buy
                                </button>
                        </div>
            </React.Fragment>
        )
    }