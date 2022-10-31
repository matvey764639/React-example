import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { CommentItem, commentsStore } from "./CommentsStore";
import { appStore } from "../AppStore";
import { observer } from "mobx-react-lite";

function MakeComment(props: CommentItem) {
    return (
        <>
            <h3>{props.name}</h3>
            <div>{props.body}</div>
        </>
    );
}

const Comments: React.FC = observer(() => {
    useEffect(() => {
        commentsStore.loadComments(appStore.targetId);
    }, []);
    const comments = commentsStore.comments;
    return (
        <Modal
            show={commentsStore.isShowComments}
            onHide={() => commentsStore.setIsShowComments(false)}
        >
            <Modal.Header>
                <Modal.Title className="text-center">Комментарии</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {commentsStore.isLoading && (
                    <h4>
                        <Spinner animation="border" role="status" /> Загрузка
                        комментариев...
                    </h4>
                )}

                {!commentsStore.isLoading &&
                    (comments.map((comment) => (
                        <MakeComment key={comment.id} {...comment} />
                    )) || <h4>No comments</h4>)}
            </Modal.Body>
        </Modal>
    );
});

export default Comments;
