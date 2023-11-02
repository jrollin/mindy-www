"use client";

import { Webpage } from "@/domains/Webpage";

type ListItemProps = {
    webpage: Webpage;
};
const ListItemWebpage = ({ webpage }: ListItemProps) => {
    return <div className="">{webpage.title}</div>;
};

type ListProps = {
    webpages: Webpage[];
};
const ListWebpages = ({ webpages }: ListProps) => {
    return (
        <section className="webpage-list">
            {webpages &&
                webpages.map((webpage) => (
                    <ListItemWebpage key={webpage.webpageId} webpage={webpage} />
                ))}
        </section>
    );
};

export default ListWebpages;
