import { gql } from "@apollo/client";
import { Webpage } from "@domains/Webpage";
import { client } from "@app/libs/apollo-client";

export const GET_WEBPAGE = gql`
  query FindWebpageById($id: UUID!) {
    webpage {
      findWebpageById(id: $id) {
        webpageId
        title
        content
      }
    }
  }
`;
export const findWebpageById = async (id: string): Promise<Webpage | null> => {
    try {
        const resp = await client.query({
            query: GET_WEBPAGE,
            fetchPolicy: "no-cache",
            variables: { id: id },
        });
        return resp?.data?.webpage?.findWebpageById;
    } catch (e) {
        return null;
    }
};
