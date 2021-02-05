// working on Hooks on count  to reset,increment, decrement...

import React,{useState} from 'react';

function Counthooktwo(props) {
    const[counting,setcounting] = useState(0)

   const Incrementfive = () => {
       for(let i = 0; i < 5; i++){
            setcounting(prevcount => prevcount + 1);
       }
       
    }
        
    
    return (
        <div>
           Count:{counting} 
                 <button onClick= {() =>setcounting(0)} >Reset</button>
                 <button onClick= {() => setcounting(counting + 1)}>increment</button>
                 <button onClick= {() =>setcounting(counting - 1)}>Decrement</button>
                <button onClick = {Incrementfive}>INCREMENT FIVE</button>
              
        </div>
    );

    }
export default Counthooktwo;