// import React from 'react';
// function Mapping(props) {
//  const BoysGirls = ["Hero Chandu", "Kamal", "Rana", "Kranthi sir"]
//         const Guys = BoysGirls.map(name => <h1>{name}</h1>)
//     return (
//         <div>
//             {
//                 Guys
//              }
//             </div>
//     );
// }
// export default Mapping;


// import React, {useState} from 'react';
// function Mapping() {
//     const[Digits,setDigit] = useState(0);
//            const  updatedigit = () =>{
//             setTimeout( () =>{
//                  setDigit(Digits+5)
//              },1000)

          
            
//          }
//     return (
//         <div>
//                <p>Digit Increment: {Digits}</p>
//               <div>{updatedigit()}</div>
//         </div>
//     );
// }

// export default Mapping;



import React,{useState} from 'react';

function Mapping(props) {
    const [myclass, setMyclass] = useState("black");
    const [value,setvalue] = useState("You know you're in love when you can't fall asleep because reality is finally better than your dreams.");
    const updatevalue = ()=>{
         setTimeout( () => {
             setMyclass("ttt");
            setvalue("gfgfgfg");
            setMyclass("red");
        },5000)
     }

       
           
    return (
          <div>
              <p className={myclass}>{myclass}</p>
            <p className={myclass}>{value}</p>
             <div>{updatevalue()}</div>
  
            
        </div>
    );
}

export default Mapping;

// import React, {useState} from 'react';
// function Mapping(props) {
// const [hell,sethell] = useState("Surprise");
//     const changehell = () =>{
//         setTimeout(() => {
//             sethell("Good to See you");
//          }, 2000);
//     }
//     return (
//         <div>
//             <p className = "hell">{hell}</p>
//             <div>{ changehell()}</div>
            
//         </div>
//     );
// }

// export default Mapping;


























