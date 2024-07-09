"use client";
import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BASE_URL } from "@/graphql/ApolloClient";
import { Copy } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CHATBOT_BY_ID } from "@/graphql/queries/queries";
import { GetChatbotByIdResponse, GetChatbotByIdVariables } from "@/types/types";

function EditChatbot({ params: { id } }: { params: { id: string } }) {
  const [url, setUrl] = useState<string>("");
  const [chatbotName, setChatbotName] = useState<string>("");

  const { data, loading, error } = useQuery<
    GetChatbotByIdResponse,
    GetChatbotByIdVariables
  >(GET_CHATBOT_BY_ID, { variables: { id } });

  useEffect(()=>{
    if(data){
      setChatbotName(data.chatbots.name)
    }
  })

  useEffect(() => {
    const url = `${BASE_URL}/chatbot/${id}`;
    setUrl(url);
  }, [id]);
  return (
    <div className=" px-0 md:p-10 ">
      <div className=" ms:sticky md:top-0 z-50 sm:max-w-sm ml-auto space-y-2 md:border p-5 rounded-b-lg bg-orange-500">
        <h1 className=" text-white text-sm font-bold">Link to Chat</h1>
        <p className=" text-sm italic text-white">
          Share this link with your customers to start conversation with your
          chatbot.
        </p>
        <div className=" flex items-center space-x-2">
          <Link href={url} className=" w0full cursor-pointer hover:opacity-50">
            <Input value={url} readOnly className="cursor-pointer"></Input>
          </Link>
          <Button
            size={"sm"}
            className=" px-3"
            onClick={() => {
              navigator.clipboard.writeText(url);
              toast.success("Copied to Clipboard");
            }}
          >
            <span className=" sr-only">Copy</span>
            <Copy className=" h-5 w-4" />
          </Button>
        </div>
      </div>
      <section className=" relative mt-5 bg-white p-5 md:p-10 rounded-lg">
        <Button
          variant={"destructive"}
          className=" absolute top-2 right-2 h-8 w-2"
          // onClick={() => handleDelete(id)}
        >
          X
        </Button>
        <div>
          <Avatar seed={chatbotName} />
        </div>
      </section>
    </div>
  );
}

export default EditChatbot;
