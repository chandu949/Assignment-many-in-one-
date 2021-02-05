// import React from 'react';

// // Events in funtions,,,,,,
// function Funcls() {

//   function  Handler(){
//         console.log("Button clicked");
      
//     }
//     return (
//         <div>
            
//             <button onClick = {Handler}>Click me!</button>
            
//         </div>
//     );
// }

// export default Funcls;

import React, { Component } from 'react';

class Funcls extends Component {
    Funcls(){
        // console.log("clicked");
        "clicked"

    }

    render() {
        return (
            <div>
               
                <button onClick = {this.Funcls}>CLick me</button>
                
            </div>
        );
    }
}

export default Funcls;