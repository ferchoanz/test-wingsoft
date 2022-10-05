import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export function Header() {
    const navigator = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const [url, setUrl] = useState('');

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigator('/login');
    };

    useEffect(() => {
        if (user.role === 'Admin') {
            setUrl('/admin');
        } else {
            setUrl('/posts');
        }
    }, [])

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="row w-100">
                <div className="col-2 clearfix">
                    <a className="navbar-brand float-start" href="#">Blog</a>
                </div>
                <div className="col-2 clearfix">
                    <NavLink className={'navbar-brand float-start'} to={url}>Post</NavLink>
                </div>
                <div className="col-4 clearfix">
                    <NavLink className={'navbar-brand float-start'} to={'/admin/statistics'} hidden={user.role !== 'Admin'}>Statistics</NavLink>
                </div>
                <div className="col-4 clearfix">
                    <a className="navbar-brand float-end" href="#" onClick={logout}>Logout</a>
                </div>
            </div>
        </nav>
    );
}