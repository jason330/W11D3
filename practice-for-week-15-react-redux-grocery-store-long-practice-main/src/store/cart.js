import produceData from '../mockData/produce.json'

const POPULATE = 'cart/POPULATE'

export const populateCart = (produceId) => {
    return {
        type: POPULATE,
        item : {
            id: produceId,
            count: 1
        }
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
            return newState
        default:
          return state;
    }
}