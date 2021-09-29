import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import './FriendDetails.css';

const FriendDetails = () => {
    const { friendID } = useParams();

    const [friend, setFriend] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendID}`)
            .then(response => response.json())
            .then(jsonData => setFriend(jsonData))
    }, []);

    return (
        <div>
            <h3>Individual Friend Details of {friendID}</h3>
            <h4>User Name: {friend.username}</h4>
            <h5>Email: {friend.email}</h5>
            <h5>Works at: {friend.company?.name}</h5>

        </div>
    );
};

export default FriendDetails;