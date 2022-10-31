import React, { memo, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import MakeRow from "./MakeRow";
import { listOfPostsStore } from "./ListOfPostsStore";
import { filterBarStore } from "./FilterBarStore";
import { observer } from "mobx-react-lite";

const ListOfPosts: React.FC = () => {
    useEffect(() => {
        listOfPostsStore.loadPosts();
    }, []);
    let posts = listOfPostsStore.posts;
    if (filterBarStore.isFilter) {
        posts = posts.filter(
            (post) =>
                post.title.indexOf(filterBarStore.filter) !== -1 ||
                post.body.indexOf(filterBarStore.filter) !== -1
        );
    }

    if (listOfPostsStore.isLoading) {
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
                {posts.map((row) => (
                    <MakeRow key={row.id} {...row} />
                ))}
            </tbody>
        </table>
    );
};

export default observer(ListOfPosts);
