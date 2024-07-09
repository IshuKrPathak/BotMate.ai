"use client";
import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CREATE_CHATBOT } from "@/graphql/mutations/mutations";
import { useMutation } from "@apollo/client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const CreateChatbot = () => {
  const { user } = useUser();
  const [name, setName] = useState("");
  const router = useRouter();

  const [CreateChatbot, { data, loading, error }] = useMutation(
    CREATE_CHATBOT,
    {
      variables: {
        clerk_user_id: user?.id,
        name,
      },
    }
  );
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await CreateChatbot();
      setName("");

      router.push(`/edit-chatbot/${data.data.insertChatbots.id} `);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return null;
  }
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 bg-orange-50 p-10 rounded-md m-10 ">
      <Avatar seed="create-chatboat" />

      <div>
        <h1 className=" text-xl lg:text-3xl font-semibold">
          Create Chatbot 🤖{" "}
        </h1>
        <h2 className=" font-bold text-orange-600">
          Create a new chatbot to assist you with your conversations with your
          customers.
        </h2>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col md:flex-row gap-3 mt-5"
        >
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Chatbot Name.."
            className=" max-w-lg mt-3 "
            required
          />
          <Button
            type="submit"
            disabled={loading || !name}
            className=" hover:bg-orange-500 font-bold flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-xl mt-3 bg-orange-300 "
          >
            {loading ? "Creating Chatbot..." : "Create Chatbot"}
          </Button>
        </form>
        <p className=" text-gray-300 mt-5">Example "customer support"</p>
      </div>
    </div>
  );
};

export default CreateChatbot;
