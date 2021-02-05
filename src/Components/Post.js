 import React, { Component } from 'react';
 import axios from 'axios';
 class Post extends Component {
     constructor(props) {
         super(props);
         this.state = {
             userid: "",
              title:"",
               body:"",
             

             

         }
     }

     changehandler = (e) => {
         this.setState({[e.target.name]: e.target.value})
        
     } ;
   


     submitHandler = e =>{
         e.preventDefault();
         console.log(this.state);
         
         axios.post("https://jsonplaceholder.typicode.com/comments", this.state)
         .then(response => {
             console.log(response);
             this.setState({
                 userid: '',
                 title: '',
                 body: ''


             })
         })
         .catch(error => {
             console.log(error)
         })

         
         
     }

     
     render() {
         const {userid,title,body} = this.state
         return (
             <div>
                 <form onSubmit={this.submitHandler}>
                      <div>
                         userid:<input type="text"   id="mainInput" name="userid" value={userid} onChange={this.changehandler} />
                       </div>  

                       <div>
                           title: <input type="text"  id="mainInput" name="title" value={title} onChange={this.changehandler}/>
                       </div>

                       <div>
                           body: <input type="text"  id="mainInput" name= "body" value={body} onChange={this.changehandler}/>
                       </div>

                       <button type="submit">SUBMIT</button>
                     
                 </form>

             </div>
         );
     }
 }
 
 export default Post;