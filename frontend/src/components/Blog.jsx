import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
export function Blog() {

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="container-fluid p-0">
            <Header />
            <dir className="row">
                <div className="col-12 mt-3">
                    <h3>Welcome Back: {user?.name}</h3>
                </div>
            </dir>
            <Outlet />
        </div>
    );
}