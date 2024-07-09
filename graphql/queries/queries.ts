import { gql } from "@apollo/client";

export const GET_CHATBOT_BY_ID = gql`
query GetChatbotBy IdleDeadline($id:Int!){
    getChatbotById(id:$id){
    chatbots(id: $id){
    id
    name
    created_at
    chatbot_characteristics{
    id
    content
    created_at
    }
    chat_sessions{
    id
    created_at
    guest_id
    messages{
    id
    content
    created_at
    }
    }

    }
}
        `;