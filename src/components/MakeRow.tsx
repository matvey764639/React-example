import React from "react";
import Button from "react-bootstrap/Button";
import { appStore } from "../AppStore";
import { commentsStore } from "./CommentsStore";
import { deletePostStore } from "./DeletePostStore";
import { editPostStore } from "./EditPostStore";
import { observer } from "mobx-react-lite";

interface RowProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const MakeRow: React.FC<RowProps> = ({ userId, id, title, body }) => {
    const handleClick = () => {
        appStore.setTargetId(id);
        commentsStore.setIsShowComments(true);
    };
    const handleDelete = () => {
        appStore.setTargetId(id);
        deletePostStore.setIsDelete(true);
    };
    const handleEdit = () => {
        appStore.setTargetId(id);
        editPostStore.setIsEdit(true);
    };
    return (
        <tr onClick={handleClick}>
            <th className="userId border-end border-bottom text-center">
                {userId}
            </th>
            <th className="id border-end border-bottom text-center">{id}</th>
            <th className="border-end border-bottom">{title}</th>
            <th className="border-end border-bottom">{body}</th>
            <th className="d-flex flex-row justify-content-center">
                <Button
                    variant="primary"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleEdit();
                    }}
                >
                    Редактировать
                </Button>
                <Button
                    variant="danger"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDelete();
                    }}
                >
                    Удалить
                </Button>
            </th>
        </tr>
    );
};

export default MakeRow;
