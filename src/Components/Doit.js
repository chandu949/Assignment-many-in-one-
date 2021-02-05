// import React from 'react';
// Way of writing props in function component,,,,,,
// function Doit(props) {
//     return (
//         <div>
//             <h1>hey girl</h1>
            
//         </div>
//     );
// }

// const Doit = (props) => {
//     console.log(props);
// return(
//     <div>
//          <h1>Hello {props.name} a.k.a {props.heroname}</h1>
//          {props.children}
//     </div>
// )

      
// }
// export default Doit;

import React, { Component } from 'react';

class Doit extends Component {

//    This method is how to write props in class component,,,,,, 
    render() {
        const {name,heroname} =this.props
        return (
            <div>
                <h1>Hello {name} vs {heroname}</h1>
                
            </div>
        );
    }
}

export default Doit;