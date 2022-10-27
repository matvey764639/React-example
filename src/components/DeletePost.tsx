import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsDelete } from "./deletePostSlice";
import { deletePost } from "./listOfPostsSlice";
import { StoreType } from "../app/store";

const DeletePost: React.FC = () => {
    const isDelete = useSelector<StoreType, boolean>(
        ({ deletePost }) => deletePost.isDelete
    );
    const targetId = useSelector<StoreType, number>(({ app }) => app.targetId);
    const dispatch = useDispatch();

    return (
        <Modal show={isDelete}>
            <Modal.Header>
                <Modal.Title>Удалить пост?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button
                    variant="primary"
                    onClick={() => {
                        dispatch(deletePost(targetId));
                        dispatch(setIsDelete(false));
                    }}
                >
                    Да
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => dispatch(setIsDelete(false))}
                >
                    Нет
                </Button>
            </Modal.Body>
        </Modal>
    );
};

export default memo(DeletePost);
