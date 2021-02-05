    // Conditional rendering using if/else statement...
    //     if(this.state.loggedin){
    //         return <div>
    //             Love you
    //                </div>
    //     }else{
    //         return<div>
    //                   Hate You

    //               </div>
    //     }
       
    //  // Using variables......
        // render() {
        //     let message
        //     if(this.state.loggedin){
        //         message = <div>Hiii Chicken</div>
        //     }else{
        //         message = <div>Hiii Fish</div>
        //     }
        //     return <div>{message}</div>
            
        // }

        // using Ternary  operator
//  render() {
                  
//             return this.state.loggeddin ? (<div>Should i come</div>) : 
//              ( <div>I dont want to come</div>
// )
               
                
//             }

        import React, { Component } from 'react';
        
        class Event1 extends Component {
            constructor(props) {
                super(props);
                this.state= {
                    loggeddin : true
                }
            }

            render(){
                return this.state.loggeddin && <div>INDIA</div>
            }
           
            
           
        }
        
        export default Event1;

   