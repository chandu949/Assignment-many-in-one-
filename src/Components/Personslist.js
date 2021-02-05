import React from 'react';

function Personslist() {
    const Person = [{Name : "Chandu",
                     Age  : 24,
                     Skill : "React",
                      id : 1,
                      married: "yes"},

                     {Name : "Kranthi Sir",
                     Age  : 23,
                     Skill : "Javascript",
                      id : 2,
                      married: "nope"},

                     {Name : "Kamal",
                     Age  : 29,
                     Skill : "c++",
                    id : 3,
                    married: "yes"},

                     {Name : "Rana",
                     Age  : 24,
                     Skill : "HTML,CSS,React.js",
                     id :4,
                    married: "nope"},
                    
                    ]

         const Personslist = Person.map(Employees => <div key = {Employees.id}>Iam {Employees.Name}, Iam {Employees.Age} Years old, I know about {Employees.Skill}</div>)

    return (
        <div>
            {
                Personslist
            }
            
        </div>
    );
}

export default Personslist;