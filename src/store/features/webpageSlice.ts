'use client';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllWebpages } from '@usecases/webpages/getAllWebpages';
import { Webpage } from '@domains/Webpage';
import { findWebpageById } from '@usecases/webpages/findWebpageById';

export type WebpagesState = {
    webpages: Webpage[];
    loading?: boolean;
    detail: Webpage | null;
    error?: string | null;
};
const initialState: WebpagesState = {
    webpages: [],
    detail: null,
    loading: false,
    error: null,
};

// example : manage webpage with no id but respect typing in reducer / actions / state
type DraftWebpage = Pick<Webpage, 'title' | 'content'>;
export const buildWebpage = (draftWebpage: DraftWebpage): Webpage => {
    return { webpageId: 'whatever', ...draftWebpage };
};

//
// async func
export const fetchWebpages = createAsyncThunk(
    'webpages/fetchWebpages',
    async (): Promise<Webpage[]> => {
        try {
            return await getAllWebpages();
        } catch (error) {
            console.error('fetcherror', error);
            return [];
        }
    },
);
export const fetchWebpageDetail = createAsyncThunk(
    'webpages/fetchWebpageDetail',
    async (id: string): Promise<Webpage | null> => {
        try {
            return await findWebpageById(id);
        } catch (error) {
            console.error('fetcherror', error);
            return null;
        }
    },
);

const webpagesSlice = createSlice({
    name: 'webpages',
    initialState,
    reducers: {
        addWebpage: (state, action: PayloadAction<DraftWebpage>) => {
            const webpage = buildWebpage(action.payload);
            state.webpages.push(webpage);
        },
        removeWebpage: (state) => state,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWebpages.pending, (state, _action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchWebpages.fulfilled, (state, action) => {
            state.webpages = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(fetchWebpages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        // detail
        builder.addCase(fetchWebpageDetail.pending, (state, _action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchWebpageDetail.fulfilled, (state, action) => {
            state.detail = action.payload;
            state.loading = false;
            state.error = null;
        });
        builder.addCase(fetchWebpageDetail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export const webpagesReducer = webpagesSlice.reducer;
export const { addWebpage, removeWebpage } = webpagesSlice.actions;

export default webpagesSlice;
