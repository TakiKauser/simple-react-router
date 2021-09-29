import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {id, name, phone, website, address} = props.friend;
    return (
        <div className="friend-card">
            <h3>{name}</h3>
            <h5>Call Me: {phone}</h5>
            <h5>Visit Me @{website}</h5>
            <p><small>Location: {address.city}</small></p>
            <Link to={`/friend/${id}`}>Details</Link>
        </div>
    );
};

export default Friend;