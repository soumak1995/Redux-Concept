import {BUY_ICECREAM} from './iceCreamTypes'
const initialIceCreamState={
    noOfIceCream:10
}
const iceCreamReducer =(state=initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{ 
               ...state,
               noOfIceCream: state.noOfIceCream-1
                  }
           default:return state
    
    }
}
export default iceCreamReducer;