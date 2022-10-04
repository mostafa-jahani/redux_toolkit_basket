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
        },
        increment: (state, action) => {
            state.list = state.list.map(p => p.id === action.payload ? {...p, qty: p.qty + 1} : p)
        }
    }
})


export const {addToCart, increment} = cartSlice.actions
export default cartSlice.reducer;