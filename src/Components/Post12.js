import React, { Component } from 'react';
import axios from "axios";

class Post12 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname:"",
            lastname:"",
            contact:""
         }
    }

    changeHandler = (e) =>{
        this.setState({ [e.target.name]: e.target.value})
    }

    submithandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/comments",this.state)
        .then(response =>{
            console.log(response);
            this.setState({
                firstname:"",
                lastname:"",
                contact:""
            })

          
        })
        .catch(error =>{
            console.log(error)
        })

    }

    
    
    render() {
        const {firstname,lastname,contact} =this.state
        return (
            <div>

                 <form className = "hey" onSubmit= {this.submithandler}>
                     <div>
                        Firstname: <input type= "text" placeholder= "your firstname" name="firstname" value={firstname} onChange={this.changeHandler} />
                     </div>

                     <div>
                        Lastname: <input type="text" name="lastname" placeholder="your lastname"  value={lastname} onChange={this.changeHandler}/>
                     </div>
                     <div>
                         Contact: <input type="number" placeholder= "[0-9]{3}-[0-9]{2}-[0-9]{3}" name="contact" value={contact} onChange={this.changeHandler}/>
                     </div>
                     <button type= "submit">SUBMIT</button>
                    
                 </form>
                
            </div>
        );
    }
}

export default Post12;