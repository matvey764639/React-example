import Button from "react-bootstrap/Button";
import React, { FC, memo } from "react";
import Spinner from "react-bootstrap/Spinner";

interface PostItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface ListOfPostsProps {
    filter: string;
    doFilter: boolean;
    handleEdit: (id: number) => void;
    handleDelete: (id: number) => void;
    handleClick: (id: number) => void;
    posts: PostItem[];
    isLoading: boolean;
}

function ListOfPosts(props: ListOfPostsProps) {
    let posts = props.posts;
    if (props.doFilter) {
        posts = props.posts.filter(
            (post) =>
                post.title.indexOf(props.filter) !== -1 ||
                post.body.indexOf(props.filter) !== -1
        );
    }

    if (props.isLoading) {
        return (
            <h3>
                <Spinner animation="border" role="status" /> Загрузка постов...
            </h3>
        );
    }

    if (posts.length === 0) {
        return <h3>Нет постов</h3>;
    }
    let myStyle = "border-end border-bottom text-center";
    return (
        <table className="w-75">
            <thead>
                <tr>
                    <th className={myStyle}>userId</th>
                    <th className={myStyle}>id</th>
                    <th className={myStyle}>title</th>
                    <th className={myStyle}>body</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((row: PostItem) => (
                    <MakeRow
                        key={row.id}
                        handleEdit={props.handleEdit}
                        handleDelete={props.handleDelete}
                        handleClick={props.handleClick}
                        {...row}
                    />
                ))}
            </tbody>
        </table>
    );
}

interface RowProps {
    handleEdit: (id: number) => void;
    handleDelete: (id: number) => void;
    handleClick: (id: number) => void;
    userId: number;
    id: number;
    title: string;
    body: string;
}

const MakeRow: FC<RowProps> = (props) => (
    <tr onClick={() => props.handleClick(props.id)}>
        <th className="userId border-end border-bottom text-center">
            {props.userId}
        </th>
        <th className="id border-end border-bottom text-center">{props.id}</th>
        <th className="border-end border-bottom">{props.title}</th>
        <th className="border-end border-bottom">{props.body}</th>
        <th className="d-flex flex-row justify-content-center">
            <Button
                variant="primary"
                onClick={(e) => {
                    e.stopPropagation();
                    props.handleEdit(props.id);
                }}
            >
                Редактировать
            </Button>
            <Button
                variant="danger"
                onClick={(e) => {
                    e.stopPropagation();
                    props.handleDelete(props.id);
                }}
            >
                Удалить
            </Button>
        </th>
    </tr>
);

export default memo(ListOfPosts);
