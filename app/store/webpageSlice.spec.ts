import { describe } from "node:test";
import { addWebpage, buildWebpage, webpagesReducer } from "./webpageSlice";

describe("WebpagesSlice", () => {
    const initialState = {
        entities: [
            buildWebpage({ title: "first" }),
            buildWebpage({ title: "second" }),
        ],
    };
    it("reducers", () => {
        const webpage = buildWebpage({ title: "third" });
        const action = addWebpage(webpage);
        const newState = webpagesReducer(initialState, action);

        expect(newState.entities).toEqual([...initialState.entities, webpage]);
    });
});
