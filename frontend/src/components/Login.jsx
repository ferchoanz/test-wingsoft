import React, { useState } from "react";
import { post } from "../plugins/axios";
import { error, spinner } from "../plugins/notification";

export function Login() {
    const [email, setEmail ] = useState();
    const [password, setPassword ] = useState('');

    const submit = async e => {
        e.preventDefault();
        const swal = spinner();
        const response = await post('users/login', { email, password });
        swal.close();
        if (response.status) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.token);
            if (response.data.user.role === 'Admin') {
                window.location.replace('/admin');
            } else {
                window.location.replace('/posts');
            }
        } else {
            error(response.data.message);
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <form className="login" onSubmit={submit}>
                <img src="wsnegro.png" alt="image"/>
                <div className="form-outline col-12">
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        id="form2Example1"
                        className="form-control" 
                        required
                        placeholder="example@correo.com"
                    />
                </div>
                <div className="form-outline mb-12">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        id="form2Example2"
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block col-12 mt-4">Login</button>
            </form>
        </div>
    );
}