import { configureStore } from '@reduxjs/toolkit';
import { webpagesReducer } from './features/webpageSlice';

const store = configureStore({
    reducer: {
        webpages: webpagesReducer,
    },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export default store;
