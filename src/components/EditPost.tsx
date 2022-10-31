import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { listOfPostsStore } from "./ListOfPostsStore";
import { appStore } from "../AppStore";
import { editPostStore } from "./EditPostStore";
import { observer } from "mobx-react-lite";

const EditPost: React.FC = observer(() => {
    const posts = listOfPostsStore.posts;
    const post = editPostStore.post;
    const getPostById = (targetId: number) => {
        let filteredPosts = posts.filter((p) => p.id === targetId);
        let ind = posts.indexOf(filteredPosts[0]);
        return posts[ind];
    };
    useEffect(() => {
        const newPost = { ...getPostById(appStore.targetId) };
        editPostStore.setPost(newPost);
    }, []);

    const handleSave = () => {
        listOfPostsStore.replacePost(post);
        editPostStore.setIsEdit(false);
    };

    return (
        <Modal show={editPostStore.isEdit}>
            <Modal.Header>
                <Modal.Title>Edit post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Title
                    </label>
                    <input
                        value={post.title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            editPostStore.setTitle(e.target.value);
                        }}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Body
                    </label>
                    <input
                        value={post.body}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            editPostStore.setBody(e.target.value);
                        }}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => editPostStore.setIsEdit(false)}
                >
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSave()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default EditPost;
