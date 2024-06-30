import Link from "next/link";
import React from "react";
import Avatar from "./Avatar";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className=" bg-white shadow-sm text-gray-800 flex justify-between p-5">
      <Link href="/" className=" flex items-center text-4xl font-thin">
        <Avatar seed="BotMate support Agent" />

        <div className=" space-y-1">
          <h1>BotMate.ai</h1>
          <h2 className=" text-sm">Your personalised bot assistant.🤖 </h2>
        </div>
      </Link>

      <div className="flex items-center">
        <SignedIn>
          <UserButton showName />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
