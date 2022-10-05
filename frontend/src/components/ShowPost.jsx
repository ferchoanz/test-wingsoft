import React, { useEffect, useState } from "react";
import { useLocation, useParams, } from "react-router-dom";
import { get, post as httpPost } from "../plugins/axios";
import { error, spinner } from "../plugins/notification";

export function ShowPost() {
    const { id } = useParams();
    const location = useLocation();
    const [post, setPost] = useState({});
    const [previous, setPrevious] = useState(null);
    const [next, setNext] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));

    const loadData = async () => {
        const swal = spinner();
        const response = await get(`posts/${id}`);
        if (user.role !== 'Admin') {
            await httpPost('posts/visits', { userId: user?.id, postId: +id });
        }
        swal.close();
        if (response.status) {
            setPost(response.data.post);
            setPrevious(response.data.previous[0]);
            setNext(response.data.next[0]);
        } else {
            error(response.data.message);
        }
    };

    const redirect = id => {
        let url = location.pathname.split('/');
        url[url.length - 1] = id;
        url = url.join('/');
        window.location.replace(url);
    };

    useEffect(() => {
        loadData();
    }, [])

    return (
        <>
            <div className="row mt-5 mx-5">
                <div className="col-6 clearfix">
                    <button className="btn btn-primary float-start" disabled={!previous} onClick={() => redirect(previous?.id)}>Previos</button>
                </div>
                <div className="col-6 clearfix">
                    <button className="btn btn-primary float-end" disabled={!next} onClick={() => redirect(next?.id)}>Next</button>
                </div>
            </div>
            <div className="show-post">
                <ul className="list-group">
                    <li className="list-group-item active text-center"><span className="fw-bold">Title:</span> {post?.title}</li>
                    <li className="list-group-item"><span className="fw-bold">Summary:</span> {post?.summary}</li>
                    <li className="list-group-item">
                        <span className="fw-bold">Content:</span>
                        <p className="text-break"> {post?.content}</p>
                    </li>
                    <li className="list-group-item"><span className="fw-bold">Author:</span>  {post?.author}</li>
                    <li className="list-group-item"><span className="fw-bold">Created:</span> {new Date(post?.createdAt).toLocaleString()}</li>
                </ul>
            </div>
        </>
    );
}