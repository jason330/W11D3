import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE'

const populateProduce = () =>  {
    return {
        type: POPULATE, 
        produce: produceData
    }
}



export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case (POPULATE):
           return(
                { 
                    action.produce.map((el) => {
                        el.id = el 
                    })   
                }
           ) 
        default:
        return state;
           
        }
    }
}