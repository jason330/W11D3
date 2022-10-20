import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE'
const LIKE = 'produce/LIKE'

export const populateProduce = () =>  {
    return {
        type: POPULATE, 
        produce: produceData
    }
}

export const likeProduce = (produceId) => {
    return {
        type: LIKE,
        produceId
    }
}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case (POPULATE):
            let newState = {}
            action.produce.forEach(produce => newState[produce.id] = produce)
            return newState;
        case (LIKE):
            let newState = {...state}
        default:
        return state;
           
        }
    }
