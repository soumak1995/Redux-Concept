import React from 'react'
import{useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../Redux';

function HooksCakeContainer() {
    const noOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes {noOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>
                BUY
            </button>
        </div>
    )
}

export default HooksCakeContainer
