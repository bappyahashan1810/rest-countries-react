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
            {
                users.map(user => <Person name={user.name} userName={user.username} email={user.email} address={user.address.city}></Person>)
            }
        </div>
    );
};

export default Persons;