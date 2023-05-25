"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={"min-h-screen bg-black text-white"}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <div className="max-h-screen flex flex-col ">{children}</div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
