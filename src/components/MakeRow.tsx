import React, { FC, memo } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { setTargetId } from "../appSlice";
import { setIsShowComments } from "./commentsSlice";
import { setIsEdit } from "./editPostSlice";
import { setIsDelete } from "./deletePostSlice";

interface RowProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const MakeRow: React.FC<RowProps> = ({ userId, id, title, body }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setTargetId(id));
        dispatch(setIsShowComments(true));
    };
    const handleDelete = () => {
        dispatch(setTargetId(id));
        dispatch(setIsDelete(true));
    };
    const handleEdit = () => {
        dispatch(setTargetId(id));
        dispatch(setIsEdit(true));
    };
    return (
        <tr onClick={() => handleClick()}>
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

export default memo(MakeRow);
