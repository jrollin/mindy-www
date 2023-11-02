"use client";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllWebpages } from "@/usecases/webpages/getAllWebpages";
import { Webpage } from "@/domains/Webpage";

export type WebpagesState = {
    entities: Webpage[];
    loading?: boolean;
};
const initialState: WebpagesState = {
    entities: [],
    loading: false,
};

// example : manage webpage with no id but respect typing in reducer / actions / state
type DraftWebpage = Pick<Webpage, "title">;
export const buildWebpage = (draftWebpage: DraftWebpage): Webpage => {
    return { webpageId: "whatever", ...draftWebpage };
};

//
// async func
export const fetchWebpages = createAsyncThunk(
    "webpages/fetchWebpages",
    async (): Promise<Webpage[]> => {
        try {
            return await getAllWebpages();
        } catch (error) {
            console.error("fetcherror", error);
            return [];
        }
    },
);

const webpagesSlice = createSlice({
    name: "webpages",
    initialState,
    reducers: {
        addWebpage: (state, action: PayloadAction<DraftWebpage>) => {
            const webpage = buildWebpage(action.payload);
            state.entities.push(webpage);
        },
        removeWebpage: (state) => state,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWebpages.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchWebpages.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.loading = false;
        });
    },
});

export const webpagesReducer = webpagesSlice.reducer;
export const { addWebpage, removeWebpage } = webpagesSlice.actions;

export default webpagesSlice;
