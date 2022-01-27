import React, {useReducer} from "react";
import {initialState, reducer} from "./reducer";
import {Link} from "react-router-dom";
import {Context, useContext} from "./Context";

const Counter = () =>{
    const {dispatch, reducerState} = useContext(Context);
    return (
        <div>
            <button onClick={() =>{dispatch({type: "arttir"})}}>
                +
            </button>
            <button onClick={() =>{dispatch({type: "azalt"})}}>
                -
            </button>
            <p>{reducerState.count}</p>
            <Link to={"/"} >/</Link>
        </div>
    );
}

export default Counter;