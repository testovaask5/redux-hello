import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        },
        incrementedByValue: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { incremented, decremented, incrementedByValue } = counterSlice.actions

export default counterSlice.reducer

export const selectCount = state => state.counter.value
