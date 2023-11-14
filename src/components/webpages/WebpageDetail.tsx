import { Webpage } from "@domains/Webpage";

type props = {
    webpage: Webpage;
};

const DetailWebpage = ({ webpage }: props) => {
    return (
        <>
            <div className="title">{webpage.title}</div>
            <div
                className="body"
                dangerouslySetInnerHTML={{ __html: webpage.content }}
            ></div>
        </>
    );
};

export default DetailWebpage;
