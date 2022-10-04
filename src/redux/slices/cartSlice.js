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
        },
        decrement: (state, action) => {
            const product = state.list.find(p => p.id === action.payload)
            state.list = product.qty > 1 ? state.list = state.list.map(p => p.id === action.payload ? {...p, qty: p.qty - 1} : p) : state.list
        },
        deleteProduct: (state, action) => {
            state.list = state.list.filter(p => p.id !== action.payload)
        },
        clearCart: (state, action) => {
            state.list = []
        }
    }
})


export const {addToCart, increment, decrement, deleteProduct, clearCart} = cartSlice.actions
export default cartSlice.reducer;