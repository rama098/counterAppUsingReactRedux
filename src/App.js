import { increase, red, yelllow } from './actions';
import { decrease } from './actions';
import { redBackground } from './actions';
import { greenBackground } from './actions';
import { yelllowBackground } from './actions';
import {useSelector,useDispatch} from 'react-redux';
import './App.css'
function App() {
  const val=useSelector((state)=>state.updateValue)

  const color=useSelector((state)=>state.updateColor)

  const dispatch=useDispatch()
  return (
   
    <div className={color}>
      
      <h2>This is counter App</h2>

      <button onClick={()=>dispatch(decrease())}>-</button>
      <input type="text" value={val} readOnly></input>
      <button onClick={()=>dispatch(increase())}>+</button>

  <h1>Background Color Changer</h1>
      <button onClick={()=>dispatch(redBackground())}>Red</button>
      <button onClick={()=>dispatch(greenBackground())}>Green</button>
      <button onClick={()=>dispatch(yelllowBackground())}>Yellow</button>
    </div>
  );
}

export default App;
