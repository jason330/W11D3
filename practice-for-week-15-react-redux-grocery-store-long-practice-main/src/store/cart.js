import produceData from '../mockData/produce.json'

const POPULATE = 'cart/POPULATE'
const DEPOPULATE = 'cart/DEPOPULATE'
const DECREMENT = 'cart/DECREMENT'

export const populateCart = (produceId) => {
    return {
        type: POPULATE,
        item : {
            id: produceId,
            count: 1
        }
    }
}

export const decrementCart = (produceId) => {
    return {
        type: DECREMENT,
        produceId
    }
}

export const depopulateCart = (produceId) => {
    return {
        type: DEPOPULATE,
        produceId
    }
}

export default function cartReducer(state = {}, action){
    let newState = {
        ...state
    }

    switch (action.type) {
        case (POPULATE):
            if (newState[action.item.id]) {
                newState[action.item.id].count += 1;
            } else {
                newState[action.item.id] = action.item
            }
            return newState;

        case (DEPOPULATE):
            delete newState[action.produceId];
            return newState;

        case (DECREMENT):
            if (newState[action.produceId].count > 1) {
                newState[action.produceId].count -= 1
            } else {
                delete newState[action.produceId];
            }
            return newState
        default:
          return state;
    }
}