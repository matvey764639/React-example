import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";
import { deletePostStore } from "./DeletePostStore";
import { listOfPostsStore } from "./ListOfPostsStore";
import { appStore } from "../AppStore";
import { observer } from "mobx-react-lite";

const DeletePost: React.FC = observer(() => {
    return (
        <Modal show={deletePostStore.isDelete}>
            <Modal.Header>
                <Modal.Title>Удалить пост?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button
                    variant="primary"
                    onClick={() => {
                        listOfPostsStore.deletePost(appStore.targetId);
                        deletePostStore.setIsDelete(false);
                    }}
                >
                    Да
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => deletePostStore.setIsDelete(false)}
                >
                    Нет
                </Button>
            </Modal.Body>
        </Modal>
    );
});

export default DeletePost;
