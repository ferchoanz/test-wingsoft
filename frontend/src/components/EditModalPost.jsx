import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function EditModalPost({ show, handleClose, send, post }) {

    const [editPost, setEditPost] = useState({
        title: '',
        summary: '',
        content: '',
        author: '',
    });

    useEffect(() => {
        setEditPost(post)
    }, [post])

    const changeValue = (e, field) => {
        setEditPost(current => {
            const changeObject = { ...current, [field]: e.target.value };
            return changeObject;
        });
    };

    const submit = e => {
        e.preventDefault();
        send(editPost)
        handleClose()
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <form className="container" onSubmit={submit}>
                <Modal.Body>
                    <div className="form-outline col-12">
                        <label className="form-label" htmlFor="title">Title</label>
                        <input value={editPost.title} onChange={e => changeValue(e, 'title')} type="text" name="title" id="title" className="form-control" required />
                    </div>
                    <div className="form-outline col-12">
                        <label className="form-label" htmlFor="summary">Summary</label>
                        <input value={editPost.summary} onChange={e => changeValue(e, 'summary')} type="text" name="summary" id="summary" className="form-control" required />
                    </div>
                    <div className="form-outline col-12">
                        <label className="form-label" htmlFor="content">Content</label>
                        <textarea value={editPost.content} onChange={e => changeValue(e, 'content')} name="content" id="content" className="form-control" required></textarea>
                    </div>
                    <div className="form-outline col-12">
                        <label className="form-label" htmlFor="author">Author</label>
                        <input value={editPost.author} onChange={e => changeValue(e, 'author')} type="text" name="author" id="author" className="form-control" required />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}