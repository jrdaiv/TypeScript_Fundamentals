import React from 'react';

type User = {
    name: string;
    age: number;
}

export const UserList: React.FC<User> = () => {

    const users: User[] = [
        {name: 'John', age: 25},
        {name: 'Jane', age: 30},
        {name: 'Bob', age: 35},
    ];

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
    
    
}