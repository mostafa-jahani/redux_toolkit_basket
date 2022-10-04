import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: []
    },
    reducers: {
        addToCart: (state, action) => {
            const hasProduct = !!state.list.find(p => p.id === action.payload.id)
            state.list = hasProduct
                ?
                state.list.map(p => p.id === action.payload.id ? {...p, qty: p.qty + 1} : p)
                :
                [...state.list, {...action.payload, qty: 1}]
        }
    }
})



export const {addToCart} = cartSlice.actions
export default cartSlice.reducer;