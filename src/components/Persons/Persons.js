import React, { useEffect, useState } from 'react';
import './Persons.css'
import Person from './Person/Person';

const Persons = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h1>Total User: {users.length}</h1>
            <div className='countries-container'>
                {
                    users.map(user => <Person user={user} key={user.id}></Person>)
                }
            </div>

        </div>
    );
};

export default Persons;