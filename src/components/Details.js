import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const{id,img,info,price,title,inCart}= value.detailProduct
                    return (
                        <div className="container py-5">
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end title */}
                            {/*product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/*product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <p className="text-muted mt-3 mb-0">{info}</p>
                                    <h4>PRICE: N {price}</h4>
                                {/*Buttons */}
                                    <div>
                                        <Link to='/'>
                                            <button className="btn btn-outline-light bg-dark">
                                                Back
                                            </button>
                                        </Link>
                                        <button
                                        className="btn btn-outline-dark bg-bright"
                                        disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id)
                                            value.openModal(id)
                                        }}
                                        >
                                             <i className="fas fa-cart-plus"/>
                                            {inCart? 'inCart': 'Add To Cart'}
                                        </button>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    ) 
                }}
            </ProductConsumer>
        )
    }
}