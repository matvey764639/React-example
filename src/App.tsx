import React, { memo } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import ListOfPosts from "./components/ListOfPosts";
import Comments from "./components/Comments";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";
import { useSelector } from "react-redux";
import { StoreType } from "./app/store";

const App: React.FC = () => {
    const isDelete = useSelector<StoreType, boolean>(
        ({ deletePost }) => deletePost.isDelete
    );
    const isEdit = useSelector<StoreType, boolean>(
        ({ editPost }) => editPost.isEdit
    );
    const isShowComments = useSelector<StoreType, boolean>(
        ({ comments }) => comments.isShowComments
    );

    return (
        <div className="app">
            <FilterBar />
            <ListOfPosts />
            {isShowComments && <Comments />}
            {isEdit && <EditPost />}
            {isDelete && <DeletePost />}
        </div>
    );
};

export default memo(App);
