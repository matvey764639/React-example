import { makeAutoObservable } from "mobx";

class AppStore {
    targetId: number = 0;
    constructor() {
        makeAutoObservable(this);
    }
    setTargetId(newId: number) {
        this.targetId = newId;
        console.log("target = ", this.targetId);
    }
}

export const appStore = new AppStore();
