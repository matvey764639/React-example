import React from "react";
import {
    action,
    makeAutoObservable,
    makeObservable,
    observable,
    values,
} from "mobx";
import { observer } from "mobx-react-lite";

class TestComponentStore {
    value: number = 0;
    constructor() {
        makeObservable(this, {
            value: observable,
            increment: action,
            decrement: action,
        });
        console.log("constructor TestComponentStore ", this.value);
    }
    increment() {
        this.value += 1;
        console.log("increment ", this.value);
    }
    decrement() {
        this.value -= 1;
        console.log("decrement ", this.value);
    }
}

export const testComponentStore = new TestComponentStore();
export const TestComponent = observer(() => {
    return (
        <>
            <div>value = {testComponentStore.value}</div>
            <button onClick={() => testComponentStore.increment()}>
                increment
            </button>
            <button onClick={() => testComponentStore.decrement()}>
                decrement
            </button>
        </>
    );
});
