
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
          <body>
            <main>
              home page
              {children}
            </main>
          </body>
        </html>
    )
}