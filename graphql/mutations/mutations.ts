import { gql } from "@apollo/client";

export const CREATE_CHATBOT = gql`
  mutation CreateChatBot($clerk_user_id: String!, $name: String!) {
    insertChatbots(objects: { clerk_user_id: $clerk_user_id, name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;
