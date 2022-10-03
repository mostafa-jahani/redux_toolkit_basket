import {createSlice} from '@reduxjs/toolkit'


const productSlice = createSlice({
    name : 'products',
    initialState : {
        list : []
    },
    reducers : {
        getProducts : (state, action) => {
            state.list = action.payload
        }
    }
})


export const {getProducts} = productSlice.actions
export default productSlice.reducer;