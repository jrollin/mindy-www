"use client";
import { useWebpages } from "@/app/hooks/store";
import ListWebpages from "./listWebpages";

const ListWebpagesContainer = () => {
    const [webpages, loading] = useWebpages();
    if (loading) {
        return (
            <section className="webpage-list">
                <div>Loading </div>
            </section>
        );
    }
    return (
        <section className="webpage-list">
            {webpages && <ListWebpages webpages={webpages} />}
        </section>
    );
};

export default ListWebpagesContainer;
