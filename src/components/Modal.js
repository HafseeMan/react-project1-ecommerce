import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'

export default class LoginPage extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen, closeModal} = value;
                    const{img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null
                    }else{
                        return (
                        <div className="container">
                            <div className="modal-container row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                    <h5>ITEM ADDED TO CART</h5>
                                    <img src={img} className="img rounded-circle w-75" alt="product"/>
                                    <h5 >{title}</h5>
                                    <h5 className="text-muted">Price: N{price}</h5>
                                    <Link to="/">
                                        <button className="btn bg-dark text-light" onClick={()=>closeModal()}>
                                            Back
                                        </button>
                                    </Link>
                                    <Link to="/cart">
                                        <button className="btn bg-bright" onClick={()=>closeModal()}>
                                            Go to Cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        )
                        
                    }
                }}
            </ProductConsumer>
        )
    }
}