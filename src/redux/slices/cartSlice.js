import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        // add to cart
        addToCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                // increment quantity
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProducts,existingProduct]
            }else{
                // insert product
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        // remove cart
        removeCartItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        // increment cart item
        incrementCartItem:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state.filter(item=>item.id!=action.payload)
            state = [...remainingProducts,existingProduct]
        },
        // decrement cart item
        decrementCartItem:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state.filter(item=>item.id!=action.payload)
            state = [...remainingProducts,existingProduct]
        }



    }
})
export const {addToCart,removeCartItem, incrementCartItem,decrementCartItem} = cartSlice.actions
export default cartSlice.reducer