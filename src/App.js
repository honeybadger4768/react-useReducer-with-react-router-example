import React, {useReducer} from "react";
import './App.css';
import {initialState, reducer} from "./reducer";
import {Link, Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Counter from "./Counter";
import CounterTwo from "./CounterTwo";
import {Context, useContext} from "./Context";

const AnaDizin = () =>{
    return (
        <div>
            <Link to={"/counter"} >Counter</Link>
            <br />
            <Link to={"/counterTwo"} >CounterTwo</Link>
        </div>
    );
}

function App() {
    const [reducerState, dispatch] = useReducer(reducer, initialState)
    const globalVariables = {
      dispatch, reducerState
    };
  return (
      <Context.Provider value={globalVariables} >
        <Router>

            <Routes>
                <Route exact path={"/"} element={<AnaDizin />} />
                <Route path={"/counter"} element={<Counter />} />
                <Route path={"/counterTwo"} element={<CounterTwo />} />
            </Routes>
        </Router>
      </Context.Provider>
  );
}

export default App;
