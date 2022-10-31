import { flow, makeAutoObservable } from "mobx";

export interface CommentItem {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
class CommentsStore {
    comments: CommentItem[] = [];
    isShowComments: boolean = false;
    isLoading: boolean = false;
    constructor() {
        makeAutoObservable(this);
    }
    setIsShowComments(show: boolean) {
        this.isShowComments = show;
    }

    loadComments = flow(function* (this: CommentsStore, targetId: number) {
        this.isLoading = true;
        let url =
            "https://jsonplaceholder.typicode.com/posts/" +
            targetId.toString() +
            "/comments";
        const response = yield fetch(url);
        const comments = yield response.json();
        this.isLoading = false;
        this.comments = comments;
    });
}

new Promise((resolve, reject) => {
    setInterval(() => {
        reject();
    }, 3000);
})
    .then(() => {
        //
    })
    .catch(() => {})
    .finally(() => {});

export const commentsStore = new CommentsStore();
