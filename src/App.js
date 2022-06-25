import React, { useState, useReducer } from 'react'
import Test from './components/Test'

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw'
}

const reducer = (state, action) => {
  console.log("11", state, action);
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload
    case ACTION_TYPES.withdraw:
      return state - action.payload
    default:
      return state
  }
};

function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div>
        <h2>useReducer 은행에 오신것을 환영합니다.</h2>
        <p>잔고 : {money}원</p>
        <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} step="1000" />
        <button onClick={() => {
          dispatch({
            type: ACTION_TYPES.deposit,
            payload: number
          })
        }}>예금</button>
        <button onClick={() => {
          dispatch({
            type: ACTION_TYPES.withdraw,
            payload: number
          })
        }}>출금</button>
        <br />
        <hr />
        <br />
        <Test />
      </div>
    </>
  )

}

export default App
