"use client;";

import { Webpage } from "@/domains/Webpage";

type props = {
    webpage: Webpage;
};

const DetailWebpage = ({ webpage }: props) => {
    return <div className="title">{webpage.title}</div>;
};

export default DetailWebpage;
