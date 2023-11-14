import { describe } from 'node:test';
import { addWebpage, buildWebpage, webpagesReducer } from './webpageSlice';

describe('WebpagesSlice', () => {
    const initialState = {
        webpages: [
            buildWebpage({ title: 'first', content: 'contentA' }),
            buildWebpage({ title: 'second', content: 'contentB' }),
        ],
        detail: null,
        loading: false,
        error: null,
    };
    it('reducers', () => {
        const webpage = buildWebpage({
            title: 'third',
            content: 'contentC',
        });
        const action = addWebpage(webpage);
        const newState = webpagesReducer(initialState, action);

        expect(newState.webpages).toEqual([...initialState.webpages, webpage]);
    });
});
