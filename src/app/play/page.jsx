export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-sky-500 to-blue-700 text-white min-h-screen">
        <main className="max-w-xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
