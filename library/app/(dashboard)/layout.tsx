import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/layouts/header";

export const metadata: Metadata = {
  title: "CES Books",
  description: "Library web app for the SESC module",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="overflow-x-hidden">
          <div className="flex gap-10 justify-between p-2 xl:px-64 lg:px-48 w-screen border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            <Header />
          </div>
          <div className="flex flex-col relative z-0 w-screen items-center bg-slate-50 dark:bg-slate-950 overflow-x-hidden py-4">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
