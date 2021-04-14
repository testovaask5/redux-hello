import { createStore } from 'redux'

// action creator
function decrement() {
    return { type: 'counter/decremented' }
}

function increment() {
    return { type: 'counter/incremented' }
}

function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

let store = createStore(counterReducer)

const counterEl = document.querySelector('.counter')

counterEl.textContent = store.getState().value

store.subscribe(() => {
    counterEl.textContent = store.getState().value
})

document.querySelector('.decrement').addEventListener('click', () => {
    store.dispatch(decrement())
})

document.querySelector('.increment').addEventListener('click', () => {
    store.dispatch(increment())
})

