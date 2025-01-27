import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import React from "react";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex flex-col  flex-1">
      <Header />
      <div className=" flex flex-col flex-1 lg:flex-row bg-orange-100">
        <Sidebar />
        <div className=" flex-1 flex justify-center lg:justify-start items-start max-w-5xl mx-auto w-full">
          {children}
          <Toaster position="bottom-center"/>
        </div>
      </div>
    </div>
  );
}
export default AdminLayout;
