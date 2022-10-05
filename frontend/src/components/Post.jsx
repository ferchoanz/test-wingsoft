import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { del, get, patch, post } from "../plugins/axios";
import { error, spinner, success } from "../plugins/notification";
import { Pencil, Trash,  EyeFill } from 'react-bootstrap-icons';
import { Table } from "./Table";
import { CreateModalPost } from "./CreateModalPost";
import { EditModalPost } from "./EditModalPost";

export function Post() {
    const [posts, setPosts] = useState([]);
    const [editPost, setEditPost] = useState({});
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const navigator = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const isAdmin = () => user.role === 'Admin';

    const [headers, setHeaders] = useState([
        { text: 'Title', value: 'title' },
        { text: 'Summary', value: 'summary' },
        { text: 'Created', value: 'createdAt' },
        { text: 'Author', value: 'author' },
        { text: 'View', value: 'view' },
        { text: 'Edit', value: 'edit', onlyAdmin: true },
        { text: 'Delete', value: 'delete', onlyAdmin: true }
    ]);

    const loadData = async () => {
        const swal = spinner();
        const response = await get('posts');
        swal.close();
        if (response.status) {
            setPosts(response.data);
        } else {
            error(response.data.message)
        }
    };

    const mapPosts = () => posts.map((post, index) => ({
        ...post,
        createdAt: new Date(post.createdAt).toLocaleString(),
        view: <EyeFill onClick={() => navigator(user.role === 'Admin' ? `posts/${post.id}` : `${post.id}`)}/>,
        edit: <Pencil onClick={() => edit(index)} />,
        delete: <Trash onClick={() => delelted(post.id)} />
    }));

    const savePost = async addPost => {
        const swal = spinner();
        const response = await post('posts', addPost);
        swal.close();

        if (response.status) {
            success('Post created successfully');
            addPost = response.data;
            addPost.user = user;
            setPosts(current => [...current, addPost])
        } else {
            error(response.data.message);
        }
    };

    const saveEditPost = async editP => {
        const swal = spinner();
        const response = await patch(`posts/${editP.id}`, { title: editP.title, summary: editP.summary, content: editP.content, author: editP.author });
        swal.close();

        if (response.status) {
            setPosts(current => {
                const changeArray = [... current];
                const indexChange = current.findIndex(item => item.id === editP.id);
                changeArray[indexChange] = editP;
                return changeArray;
            });
            success('Post edit successfully');
        } else {
            error(response.data.message)
        }
    } 

    const edit = (index) => {
        setEditPost(posts[index]);
        handleShowEdit();
    }

    const delelted = async (id) => {
        if (!window.confirm('are you sure you want to delete ?')) {
            return;
        }

        const swal = spinner();
        const response = await del(`posts/${id}`);
        swal.close();
        if (response.status) {
            success('Post deleted successfully');
            setPosts(current => current.filter(post => post.id !== id))
        } else {
            error(response.data.message)
        }
    }

    useEffect(() => {
        loadData();

        if (!isAdmin()) {
            setHeaders(current => current.filter( header => !header.onlyAdmin))
        }

    }, [])

    return (
        <div className="m-5">
            <h1 className="text-center mt-5">Posts</h1>
            <button type="button" className="btn btn-primary mb-4" onClick={() => handleShow()} hidden={!isAdmin()}>Create Post</button>
            <CreateModalPost show={show} handleClose={handleClose} send={savePost}/>
            <EditModalPost show={showEdit} handleClose={handleCloseEdit} send={saveEditPost} post={editPost} />
            <Table headers={headers} items={mapPosts()} perPage={5} />
        </div>
    );
}