import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
          <body className="h-screen w-screen">
            <main className="w-full h-full flex items-center justify-center bg-slate-50 z-10">
                {children}
            </main>
          </body>
        </html>
    )
}