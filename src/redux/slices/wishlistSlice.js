import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // add to wishlist
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        }
        // remove from wishlist

    }
})
export const {addToWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer