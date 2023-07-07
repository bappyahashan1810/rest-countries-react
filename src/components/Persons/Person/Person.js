import React from 'react';
import './Person.css'

const Person = (props) => {
    const { name, username, email, address } = props.user;
    return (

        <div className='user'>
            <h3>Name: {name}</h3>
            <h4>User_name: {username}</h4>
            <strong>Email: {email}</strong><br /><br />
            <i>Address: {address.city}</i>
        </div>
    );
};

export default Person;