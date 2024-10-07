import React, { useState, useEffect } from 'react';
import { fetchFilterUsers } from '../api/fetchUsers';

const UserForm = () => {
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            setError(null);

            const response = await fetchFilterUsers(name);
            if (response.error) {
                setError(response.error);
            } else {
                setUsers(response);
            }
        })();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const response = await fetchFilterUsers(name);
        if (response.error) {
            setError(response.error);
        } else {
            setUsers(response);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">User Filter</h2>
            <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter user name" required />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">
                    Filter Users
                </button>
            </form>
            {error && <div className="alert alert-danger mt-2">{error}</div>}
            <ul className="list-group mt-3">
                {users.map((user) => (
                    <li key={user.id} className="list-group-item">
                        {user.name} - {user.age} years old - Job: {user.is_job ? 'Yes' : 'No'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserForm;
