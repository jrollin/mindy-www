import { gql } from "@apollo/client";
import { Webpage } from "@/domains/Webpage";
import { client } from "@/app/libs/apollo-client";

export const GET_WEBPAGES = gql`
  query GetAllWebpages {
    webpage {
      listWebpages {
        webpageId
        title
      }
    }
  }
`;

export const getAllWebpages = async (): Promise<Webpage[]> => {
    try {
        const resp = await client.query({
            query: GET_WEBPAGES,
            fetchPolicy: "no-cache",
        });
        return resp?.data?.webpage?.listWebpages;
    } catch (e) {
        return [];
    }
};
