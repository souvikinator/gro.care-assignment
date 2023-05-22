"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <div className="min-h-screen flex flex-col mx-20">
            <Navbar />
            {children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
