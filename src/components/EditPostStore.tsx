import { makeAutoObservable } from "mobx";
import { PostItem } from "./ListOfPostsStore";

class EditPostStore {
    isEdit: boolean = false;
    post: PostItem = { id: 0, userId: 0, title: "", body: "" };
    constructor() {
        makeAutoObservable(this);
    }
    setTitle(newTitle: string) {
        this.post.title = newTitle;
    }
    setBody(newBody: string) {
        this.post.body = newBody;
    }
    setPost(newPost: PostItem) {
        this.post = newPost;
    }
    setIsEdit(newEdit: boolean) {
        this.isEdit = newEdit;
    }
}

export const editPostStore = new EditPostStore();
