import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const CreateChatbot = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 bg-orange-50 p-10 rounded-md m-10 ">
      <Avatar seed="create-chatboat" />

      <div>
        <h1 className=" text-xl lg:text-3xl font-semibold">Create Chatbot 🤖 </h1>
        <h2 className=" font-bold text-orange-600">
          Create a new chatbot to assist you with your conversations with your
          customers.
        </h2>
        <form className=" flex flex-col md:flex-row gap-3 mt-5">
          <Input
            type="text"
            placeholder="Chatbot Name.."
            className=" max-w-lg mt-3 "
            required
          />
          <Button className=" hover:bg-orange-500 font-bold flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-xl mt-3 bg-orange-300 ">Create Chatbot</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateChatbot;
