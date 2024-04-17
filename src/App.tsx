import { useCounter } from './Hooks/useCounter';
import './App.css'

function App() {
 
    const counter  = useCounter();
    
    return (
      <div>
        <h1>Count: {counter.count}</h1>
        <h2>{counter.isEven(counter.count) ? 'Even' : 'Odd'}</h2>
        <button onClick={counter.increment}> + </button>
        <button onClick={counter.decrease}> - </button>
        <button onClick={counter.reset}>Reset</button>

        <button onClick={counter.SetMax}>set Max </button>
        <button onClick={counter.SetMin}>set Min </button>
        <button onClick={counter.SetP10}>set +10 </button>
        <button onClick={counter.SetM10}>set -10 </button>
      </div>
    );
}


export default App;
