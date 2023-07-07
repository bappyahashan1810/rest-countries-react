import React from 'react';
import './Person.css'

const Person = (props) => {
    return (
        <div className='user'>
            <h3>Name: {props.name}</h3>
            <h4>User_name: {props.userName}</h4>
            <strong>Email: {props.email}</strong>
            <i>Address: {props.address}</i>
        </div>
    );
};

export default Person;