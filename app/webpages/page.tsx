"use client";
import Header from "@/components/header";
import ListWebpagesContainer from "../components/webpages/listWebpagesContainer";
import store from "../store/store";
import { fetchWebpages } from "../store/webpageSlice";

export default function Home() {
    store.dispatch(fetchWebpages());

    return (
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header />

            <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <ListWebpagesContainer />
                </div>
            </main>
        </div>
    );
}
