import React, { memo, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowComments, CommentItem, loadComments } from "./commentsSlice";
import { StoreType } from "../app/store";

function MakeComment(props: CommentItem) {
    return (
        <>
            <h3>{props.name}</h3>
            <div>{props.body}</div>
        </>
    );
}

function Comments() {
    const show = useSelector<StoreType, boolean>(
        ({ comments }) => comments.isShowComments
    );
    const targetId = useSelector<StoreType, number>(({ app }) => app.targetId);
    const comments = useSelector<StoreType, CommentItem[]>(
        ({ comments }) => comments.comments
    );
    const isLoading = useSelector<StoreType, boolean>(
        ({ comments }) => comments.isLoading
    );
    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch(loadComments(targetId));
    }, []);

    return (
        <Modal show={show} onHide={() => dispatch(setIsShowComments(false))}>
            <Modal.Header>
                <Modal.Title className="text-center">Комментарии</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {isLoading && (
                    <h4>
                        <Spinner animation="border" role="status" /> Загрузка
                        комментариев...
                    </h4>
                )}

                {(!isLoading &&
                    comments.map((comment) => (
                        <MakeComment key={comment.id} {...comment} />
                    ))) || <h4>No comments</h4>}
            </Modal.Body>
        </Modal>
    );
}

export default memo(Comments);
