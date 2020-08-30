import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
//Provider

//Consumer
 class ProductProvider extends Component{
    state = {
        products: [],
        detailProduct:detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct:detailProduct,
        cartTotal:0

    }
    componentDidMount(){
        this.setProducts()
    }
    setProducts = () =>{
        let tempProducts = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem]

        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }
    getItem = (id) =>{
        const product = this.state.products.find(item => item.id ===id)
        return product;
    }
    handleDetail = (id) =>{
     const product = this.getItem(id)
     this.setState(()=>{
         return {detailProduct:product}
     })
    }
    addToCart = id =>{
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price

        /*NB: If one part of the state is rendered, all other functions are rendered too. */
        this.setState(()=>{
            return {product: tempProducts, cart:[...this.state.cart, product]}
        },
        ()=>{ 
            this.addTotals()
        })
    } 
    openModal = id =>{
        const product = this.getItem(id)
        this.setState(()=>{
            return {modalProduct:product,modalOpen:true}
        })
    }
    closeModal = ()=>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }
    increment = (id) => {
        let tempCart = [...this.state.cart]
        /*for items in cart, select the one with matching id */
        const selectedProduct = tempCart.find(item=>item.id === id)
        
        /*save index and item */
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]

        product.count = product.count + 1
        product.total = product.count * product.price

        /*call back function so they run simultaneously when changed */
        this.setState(
            ()=>{return {
                cart: [...tempCart]}
                },()=>{
                    this.addTotals()
                })
    }
    decrement = (id) => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item=>item.id === id)
        
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]

        if(product.count === 1){
            return null
        }
        else{
            product.count = product.count - 1
            product.total = product.count * product.price

            this.setState(
                ()=>{return {
                    cart: [...tempCart]}
                    },()=>{
                        this.addTotals()
                    })
        }
       

    }
    /*Look for  item in cart and delete*/
    /*Find index of item in products array */
    /*Use index to target item in store, add change it's state back to default in array*/
    /*return new cart and products */
    /*run the addTotal function again */
    removeItem = (id) =>  {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        
        tempCart = tempCart.filter(item => item.id !== id)
        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index]

        removedProduct.inCart= false
        removedProduct.count=0
        removedProduct.total=0

        this.setState(()=>{
            return{
                cart:[...tempCart],
                products:[...tempProducts]
            }
        },()=>{
            this.addTotals()
        })
    }
    /*1. empty cart 2. set all products to default state. ie. add to cart btn. 3. Cart total = 0*/
    clearCart = () => {
        this.setState(()=>{
            return {
                cart: []
            }
        },()=>{
            this.setProducts()
            this.addTotals()
        })
    }
    addTotals = () =>{
        let finalTotal = 0
        this.state.cart.map(item =>(finalTotal += item.total))
        this.setState(()=>{
            return{
                cartTotal: finalTotal
            }
        })
    }
    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart,
            openModal:this.openModal,
            closeModal:this.closeModal,
            increment:this.increment,
            decrement:this.decrement,
            removeItem:this.removeItem,
            clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }    

}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}