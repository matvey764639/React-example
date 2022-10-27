import React, { memo, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import MakeRow from "./MakeRow";
import { PostItem, loadPosts } from "./listOfPostsSlice";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../app/store";

const ListOfPosts: React.FC = () => {
    let posts = useSelector<StoreType, PostItem[]>(({ posts }) => posts.posts);
    const isLoading = useSelector<StoreType, boolean>(
        ({ posts }) => posts.isLoading
    );
    const isFilter = useSelector<StoreType, boolean>(
        ({ filterBar }) => filterBar.isFilter
    );
    const filter = useSelector<StoreType, string>(
        ({ filterBar }) => filterBar.filter
    );
    const dispatch = useDispatch<any>();
    useEffect(() => {
        dispatch(loadPosts("https://jsonplaceholder.typicode.com/posts"));
    }, []);

    if (isFilter) {
        posts = posts.filter(
            (post) =>
                post.title.indexOf(filter) !== -1 ||
                post.body.indexOf(filter) !== -1
        );
    }

    if (isLoading) {
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

export default memo(ListOfPosts);
