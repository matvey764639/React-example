import { makeAutoObservable } from "mobx";

class FilterBarStore {
    filter: string = "";
    isFilter: boolean = false;
    constructor() {
        makeAutoObservable(this);
    }
    toggleFilter() {
        this.isFilter = !this.isFilter;
    }
    setFilter(value: string) {
        this.filter = value;
    }
}

export const filterBarStore = new FilterBarStore();
