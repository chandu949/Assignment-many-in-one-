import React, { Component } from 'react';

class Form1 extends Component {

    constructor(props) {
        super(props);
        this.state= {
            FirstName: "",
            SecondName: "",
            Age : "",
            skill: ""

        }
    }

    changefirstname = (event) => {
        this.setState({
            FirstName: event.target.value

        })
    }

    changesecond = (event) => {
        this.setState({
            SecondName:event.target.value

         })

       }

       changeage = (event) => {
           this.setState({
               Age:event.target.value
           })

       }

       changeoption = (event) =>{
           this.setState({
               skill: event.target.value

           })
       }

       submitting = (event) =>{
        alert (`${this.state.FirstName} ${this.state.SecondName} ${this.state.Age} ${this.state.skill}`)
        event.preventDefault()
    
    }
   



    
    render() {
        return (
           
            < form onSubmit = {this.submitting}>
                <div>
                    <lable>FirstName</lable>
                    <input type= "text" 
                     value = {this.state.FirstName}
                     onChange = {this.changefirstname}
                     />
                 </div>

                 <div>
                    <lable>SecondName</lable>
                    <input type= "text" 
                    value = {this.state.SecondName}
                    onChange = {this.changesecond}
                     />
                 </div>
                 
                 <div>
                     <label>Age</label>
                     <input type = "number"
                     value = {this.state.Age}
                     onChange ={this.changeage}
                      />
                </div>

                   <div>
                  <label>Skill</label>
                     <select value= {this.state.skill}onChange={this.changeoption}>
                    <option value= "React">React</option>
                    <option value= "c++">c++</option>
                    <option value="Javascript">Javascript</option>
                    <option value= "Bootstrap">BootStrap</option>
                     </select>
                </div>
                

                <button >submit</button>
                   
                
              
            </form>
            
           

        );
    }
}

export default Form1;