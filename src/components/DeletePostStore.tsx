import { makeAutoObservable } from "mobx";

class DeletePostStore {
    isDelete: boolean = false;
    constructor() {
        makeAutoObservable(this);
    }
    setIsDelete(newDelete: boolean) {
        this.isDelete = newDelete;
    }
}

export const deletePostStore = new DeletePostStore();
