import React from 'react'
import {buyIceCream} from '../Redux'
import {connect} from 'react-redux'
function IceCreamContainer(props) {
    return (
        <div>
            <h3>Number of cakes{props.numOfIceCreams}</h3>
            <button onClick={props.buyIceCream}>Buy</button>
        </div>
    )
}

const mapStateToProps=state=>{
  return{
    numOfIceCreams:state.iceCream.noOfIceCream
  }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
