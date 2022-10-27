import React, { memo, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { setEditPost, setIsEdit } from "./editPostSlice";
import { replacePost } from "./listOfPostsSlice";
import { PostItem } from "./listOfPostsSlice";
import { StoreType } from "../app/store";

const EditPost: React.FC = () => {
    const isEdit = useSelector<StoreType, boolean>(
        ({ editPost }) => editPost.isEdit
    );
    const targetId = useSelector<StoreType, number>(({ app }) => app.targetId);
    const posts = useSelector<StoreType, PostItem[]>(
        ({ posts }) => posts.posts
    );
    let post = {
        ...useSelector<StoreType, PostItem>(({ editPost }) => editPost.post),
    };
    const dispatch = useDispatch();
    const getPostById = (targetId: number) => {
        let filteredPosts = posts.filter((p) => p.id === targetId);
        let ind = posts.indexOf(filteredPosts[0]);
        return posts[ind];
    };
    useEffect(() => {
        const newPost = { ...getPostById(targetId) };
        dispatch(setEditPost(newPost));
    }, []);

    const handleSave = () => {
        dispatch(replacePost(post));
        dispatch(setIsEdit(false));
    };

    return (
        <Modal show={isEdit}>
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
                            post.title = e.target.value;
                            dispatch(setEditPost(post));
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
                            post.body = e.target.value;
                            dispatch(setEditPost(post));
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
                    onClick={() => dispatch(setIsEdit(false))}
                >
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSave()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default memo(EditPost);
