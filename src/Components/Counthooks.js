// Working with Hooks.......(UseState)
import React,{useState} from 'react';

function CountHooks(props) {
    const[count,setcount] = useState(0);
    return (
        <div>
            <button onClick= {() => setcount(count + 1)}>Count {count}</button> 
            
        </div>
    );
}

export default CountHooks;