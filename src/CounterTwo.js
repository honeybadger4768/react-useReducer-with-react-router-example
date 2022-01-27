import React, {useReducer, useState} from "react";
import {initialState, reducer} from "./reducer";
import {Link} from "react-router-dom";
import {Context, useContext} from "./Context";
const Counter = () =>{
    const [input, setInput] = useState();
    const {dispatch, reducerState} = useContext(Context);
    return (
        <div>
            <input onChange={i => setInput(i.target.value)} value={input} /><br />
            <button onClick={() =>{dispatch({type: "degerliArttir", count: input === null ? parseInt(input) : 1})}}>
                +
            </button>
            <button onClick={() =>{dispatch({type: "degerliAzalt", count: input === null ? parseInt(input) : 1})}}>
                -
            </button>
            <p>{reducerState.count}</p>
            <Link to={"/"} >/</Link>
        </div>
    );
}

export default Counter;