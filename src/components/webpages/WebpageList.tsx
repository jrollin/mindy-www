import { Webpage } from "@domains/Webpage";
import { Link } from "react-router-dom";

type ListItemProps = {
    webpage: Webpage;
};
const WebpageListItem = ({ webpage }: ListItemProps) => {
    return (
        <div className="">
            <Link to={`/webpages/${webpage.webpageId}`}>{webpage.title}</Link>
        </div>
    );
};

type ListProps = {
    webpages: Webpage[];
};
const WebpageList = ({ webpages }: ListProps) => {
    return (
        <section className="webpage-list">
            {webpages &&
                webpages.map((webpage) => (
                    <WebpageListItem key={webpage.webpageId} webpage={webpage} />
                ))}
        </section>
    );
};

export default WebpageList;
