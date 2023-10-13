import { Webpage } from "@/models/Webpage";
import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
import { use } from "react";

const client = new ApolloClient({
    uri: process.env.GQL_API_URL,
    cache: new InMemoryCache(),
});

const WEBPAGES_QUERY = gql`
  query {
    webpage {
      listWebpages {
        webpageId
        title
      }
    }
  }
`;

async function getWebpages(): Promise<Webpage[] | null> {
    try {
        let resp = await client.query({
            query: WEBPAGES_QUERY,
        });
        return resp?.data?.webpage?.listWebpages;
    } catch (e) {
        console.error(e);
        return null;
    }
}

export default function Home() {
    let webpages = use(getWebpages());

    if (!webpages) {
        return <>No data...</>;
    }
    return (
        <div>
            <h1>Webpages</h1>
            <ul>
                {webpages.map((webpage) => (
                    <li key={webpage.webpageId}>{webpage.title}</li>
                ))}
            </ul>
        </div>
    );
}
