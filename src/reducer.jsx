import React, { useReducer } from "react";

const initialState = 4;
let sumArr = [];

const reducer = (state, action) => {
    console.log(state, action);
    if(action.type === "INCREMENT"){
        console.log(sumArr);
        let incOne = state + 1;
        sumArr.push(incOne);
        return incOne;
    }
    if(action.type === "DECREMENT"){
        return state - 1;
    }
    sumArr.push(state);
    console.log(sumArr);
    
    return state;
}

const UseReducer  = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <>
        <h2>Use of Reducer in React</h2>
          <p> current count:  {state}</p>
        <div className="card">
          <button  onClick={() => dispatch({type: "INCREMENT"})}> Increment</button>
          <button  onClick={() => dispatch({type: "DECREMENT"})}> Decrement</button>
        </div>
        </>
    )
}

export default UseReducer;