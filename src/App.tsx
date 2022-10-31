import React from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import ListOfPosts from "./components/ListOfPosts";
import Comments from "./components/Comments";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";
import { commentsStore } from "./components/CommentsStore";
import { editPostStore } from "./components/EditPostStore";
import { deletePostStore } from "./components/DeletePostStore";
import { observer } from "mobx-react-lite";

const App: React.FC = observer(() => {
    return (
        <div className="app">
            <FilterBar />
            <ListOfPosts />
            {commentsStore.isShowComments && <Comments />}
            {editPostStore.isEdit && <EditPost />}
            {deletePostStore.isDelete && <DeletePost />}
        </div>
    );
});

export default App;
