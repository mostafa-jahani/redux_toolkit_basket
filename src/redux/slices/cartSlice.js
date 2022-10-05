import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: localStorage.getItem('shopping-cart') ? JSON.parse(localStorage.getItem('shopping-cart')) : []
    },
    reducers: {
        addToCart: (state, action) => {
            const hasProduct = !!state.list.find(p => p.id === action.payload.id)
            state.list = hasProduct
                ?
                state.list.map(p => p.id === action.payload.id ? {...p, qty: p.qty + 1} : p)
                :
                [...state.list, {...action.payload, qty: 1}]
            localStorage.setItem('shopping-cart', JSON.stringify(state.list))
        },
        increment: (state, action) => {
            state.list = state.list.map(p => p.id === action.payload ? {...p, qty: p.qty + 1} : p)
            localStorage.setItem('shopping-cart', JSON.stringify(state.list))
        },
        decrement: (state, action) => {
            const product = state.list.find(p => p.id === action.payload)
            state.list = product.qty > 1 ? state.list = state.list.map(p => p.id === action.payload ? {...p, qty: p.qty - 1} : p) : state.list
            localStorage.setItem('shopping-cart', JSON.stringify(state.list))
        },
        deleteProduct: (state, action) => {
            state.list = state.list.filter(p => p.id !== action.payload)
            localStorage.setItem('shopping-cart', JSON.stringify(state.list))
        },
        clearCart: (state, action) => {
            state.list = []
            localStorage.setItem('shopping-cart', JSON.stringify(state.list))
        }
    }
})



export const {addToCart, increment, decrement, deleteProduct, clearCart} = cartSlice.actions
export default cartSlice.reducer;