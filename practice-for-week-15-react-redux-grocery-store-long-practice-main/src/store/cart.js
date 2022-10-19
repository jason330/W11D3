import produceData from '../mockData/produce.json'

const POPULATE = 'cart/POPULATE'

export const populateCart = (produceId) => {
    return {
        type: POPULATE,
        produceId : {
            id: produceId,
            count: 0
        }
    }
}


export default function cartReducer(state = {}, action){
    switch (action.type) {
        case (POPULATE):
            let newState = {
                ...state, 
                action.produceId: { }
            };
            return newState
        default:
          return state;
    }
}