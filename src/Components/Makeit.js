import React, { Component } from 'react';
// For Data Fetching u need to import Axios....
 import axios from "axios";

class Makeit extends Component {

    constructor(props) {
        super(props);
        // create a state property to store the list of posts...
         this.state = {
             post : [],
             errormsg: ""
         }
    }
// CDM is for get request method , CDM is perfect place to store the code for get request....
    //  To Make get request, get request has to b invoked on axios library
    componentDidMount(){
        // API call has to b placed in get method
        axios.get("https://jsonplaceholder.typicode.com/comments")
        // then() function is executed when a promise is resloved .
        .then(response =>{
            console.log(response);
            this.setState({post:response.data})
        }).catch(error =>{
            console.log(error);
            this.setState({ errormsg:"Error in retreiving data"})
        })
    }   


        
    render() {
        // Destructuring the state property
        const {post,errormsg} = this.state
        return (
            <div>
                {
                    post.map(posts => <div key= {posts.id}>{posts.name}</div>)
                }

                {
                      errormsg? <div>{ errormsg }</div> : null
                }
                
            </div>
        );
    }
}

export default Makeit;