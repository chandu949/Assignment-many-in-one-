import React, {useState} from 'react';

function Hooks3(props) {
    const[name , setname] = useState({firstname:'',secondname:''})

//   const  changeHandler = (e) =>
//          setname(
//              [e.target.name] = e.target.value
//          )
//     }
    
const submitall = (e) => {
    e.preventDefault();
   
          alert(name);
          console.log(name);
}

    return (
        <div>
            <form>
              FirstName <input type= "text" value={name.firstname} onChange = {e => setname({...name,firstname:e.target.value})} />
           SecondName <input type= "text" value={name.secondname} onChange = { e => setname({...name,secondname:e.target.value})} />
                    <div>
                         <h2>Your firstname : {name.firstname}</h2>
                         <h2>Your secondname :{name.secondname}</h2>
                        </div>
                        <button type="submit" onClick={submitall}>Submit</button>
                     
            </form>
          
        </div>
    );
}

export default Hooks3;