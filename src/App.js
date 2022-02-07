import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, logIn} from "./actions"

function App() {
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{`Counter: ${counter}`}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button><br/>
  
      {loggedIn && <h3>Username: Aryan</h3>}
      <button onClick={() => dispatch(logIn())}>Log In</button>
    </div>
  );
}

export default App;
