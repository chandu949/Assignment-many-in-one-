import React, { Component } from 'react';

class Quiz extends Component {

    constructor() {
        super();
        this.state = {
            questions: [{que:"Dandiya is a Popular dance of",
                          id:0,
                         options: ["Punjab", "Gujarat", "Tamil Nau", "Maharastra"],
                         ans: "Gujarat",selected:""},

                         {que:"The great Victoria Desert is located in",
                         id:1,
                         options: ["Canada", "West Africa", "Australia", "North America"],
                         ans: "Australia",selected:""},

                         {que:"The intersecting lines drawn on maps and globes are",
                         id:2,
                         options: ["Latitudes", "Longitudes", "Geographic grids", "None"],
                         ans: "Geographic grids",selected:""},

                         {que:"Plants Receive their nutrients mainly from",
                         id:3,
                         options: ["chlorophyll", "atmosphere", "light", "soil"],
                         ans: "soil", selected:""},
                        ]
        }
    };

    handleoption = (event, id) =>  {

        const sel = event.target.value;
        console.log(sel);
        console.log(id);
        console.log(this.state.questions[id]);
        const point = this.state.questions;
       point[id].event = event;
       const one = this.setState({point});

     
     

         


    }
    
       
        
    
    render() {
        return (
                      <div>
                        {this.state.questions.map((ques, index) => (
                            <div key = {index}>

                                 <p >{ques.que}</p>

                     
                            
                              <ol>  
                            {ques.options.map((opt,i) => (
                                
                            <li key = {i} >
                                <input type= "radio" value= {opt} name= "options" onClick= {(event) =>this.handleoption(event,index)}/> {opt}
                               
                             
                            </li>
  
                             ))}
                             </ol>  

                             
                            
                           
                           
                           
                            </div>
                           

                        
                         ))}
                        
                      
                      

                    

              
                
 
               
                
            </div>
           
           
           
        );
    }
}

export default Quiz;