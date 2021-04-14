import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
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

console.log(incremented())

const store = configureStore({
  reducer: counterSlice.reducer
})

const counterEl = document.querySelector('.counter')

counterEl.textContent = store.getState().value

store.subscribe(() => {
    counterEl.textContent = store.getState().value
})

document.querySelector('.decrement').addEventListener('click', () => {
    store.dispatch(decremented())
})

document.querySelector('.increment').addEventListener('click', () => {
    store.dispatch(incremented())
})

document.querySelector('.increment-by-value').addEventListener('click', () => {
    const incrementValue = +document.querySelector('.increment-value').value
    store.dispatch(incrementedByValue(incrementValue))
})