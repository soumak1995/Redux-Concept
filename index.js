import pkg from 'redux';
import reduxLogger from 'redux-logger'
const {createStore,combineReducers,applyMiddleware} = pkg;

const logger =reduxLogger.createLogger();
const BYE_CAKE= 'BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'
function buyCake(){
    return {
        type:BYE_CAKE,
        info:'First reduction action'
    }
}
function buyIceCream(){
    return {
        type:BUY_ICECREAM,
        
    }
}

const initialCakeState={
    numOfCakes:10
}
const initialIceCreamState={
    noOfIceCream:10
}
const cakeReducer =(state=initialCakeState,action)=>{
    switch(action.type){
        case BYE_CAKE:
            return{ 
               ...state,
               numOfCakes:state.numOfCakes-1
                  }
           default:return state
    
    }
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
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger));
console.log('Initial state',store.getState());
const unsubscribe = store.subscribe(()=>{});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe();

