import {
    action,
    flow,
    makeAutoObservable,
    makeObservable,
    observable,
} from "mobx";
export interface PostItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}

class ListOfPostsStore {
    posts: PostItem[] = [];
    isLoading: boolean = false;
    constructor() {
        makeObservable(this, {
            posts: observable,
            isLoading: observable,
            deletePost: action,
            replacePost: action,
            loadPosts: flow,
        });
        //makeAutoObservable(this);
    }
    deletePost(targetId: number) {
        try {
            let filteredPosts = this.posts.filter((p) => p.id === targetId);
            let ind = this.posts.indexOf(filteredPosts[0]);
            this.posts.splice(ind, 1);
        } catch (e) {
            console.log(e);
        }
    }

    replacePost(post: PostItem) {
        let filteredPosts = this.posts.filter((p) => p.id === post.id);
        let ind = this.posts.indexOf(filteredPosts[0]);
        if (ind !== -1) {
            this.posts[ind] = { ...post };
        }
    }

    async loadPosts() {
        console.log("loading posts");
        this.isLoading = true;

        let response: any = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const newPosts: PostItem[] = await response.json();
        this.isLoading = false;
        this.posts = newPosts;
    }
    /*
    loadPosts = flow(function* (this: ListOfPostsStore, url: string) {
        //console.log("loading posts");
        this.isLoading = true;
        const response = yield fetch(url);
        const newPosts = yield response.json();
        this.isLoading = false;
        this.posts = newPosts;
        //console.log("posts have been loaded");
    });*/
}

export const listOfPostsStore = new ListOfPostsStore();
