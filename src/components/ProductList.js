import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'
import Footer from './Footer'

export default class Style extends Component {
  
    render() {
        return (
            <React.Fragment>
                    <div className="row">
                        <div className="slider col-12 text-center">
                            <div className="m-3 p-5">
                                <h3>FASHION IS ART <br/> AND YOU ARE THE CANVAS.</h3>
                                <button className='btn btn-outline-light bg-dark'>
                                    <a href="#productsSection" className="text-light">START SHOPPING</a></button>
                            </div>
                        </div>
                        <div className="col-12 p-5">
                            <Title name="our" title="products"/>
                            <div id="productsSection" className="row">
                                <ProductConsumer>
                                    {value=>{
                                        return value.products.map( product => {
                                            return <Product key={product.id} product={product}/>
                                        })
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                    <Footer/>
            </React.Fragment>
        )
    }
}