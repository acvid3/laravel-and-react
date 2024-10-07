import './bootstrap';
import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            Home
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>{' '}
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/users">
                                        Users
                                    </Link>{' '}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="mt-4">
                    <Routes>
                        <Route path="/" element={<h1 className="text-center">Welcome to the Home Page</h1>} />
                        <Route path="/users" element={<UserForm />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

const root = createRoot(document.getElementById('app'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
