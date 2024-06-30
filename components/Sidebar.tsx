import {
  BotMessageSquare,
  PencilLineIcon,
  SearchCheckIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className=" bg-white text-white p-5">
      <ul className=" gap-5 flex lg:flex-col">
        <li className=" flex-1">
          <Link
            href="/create-chatbot"
            className=" hover:bg-orange-500 font-bold flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-xl bg-orange-300 "
          >
            <BotMessageSquare className=" h-6 w-6 lg:h-8 lg:w-8" />
            <div className=" hidden md:inline">
              <p className=" text-sm font-bold">Create Chatbot</p>
            </div>
          </Link>
        </li>
        <li className=" flex-1">
          <Link
            href="/edit-chatbot"
            className=" hover:bg-orange-500 font-bold flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-xl bg-orange-300 "
          >
            <PencilLineIcon className=" h-6 w-6 lg:h-8 lg:w-8" />
            <div className=" hidden md:inline">
              <p className=" text-sm font-bold">Edit Chatbot</p>
            </div>
          </Link>
        </li>
        <li className=" flex-1">
          <Link
            href="/review-chatboat"
            className=" hover:bg-orange-500 font-bold flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-xl bg-orange-300 "
          >
            <SearchCheckIcon className=" h-6 w-6 lg:h-8 lg:w-8" />
            <div className=" hidden md:inline">
              <p className=" text-sm font-bold">Search Chatbot</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
