// layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
          <nav>
            <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
              <li><a href="/">Home</a></li>
              <li><a href="/store">store</a></li>
              <li><a href="/support">support</a></li>
              <li><a href="/about">about</a></li>
              <li><a href="/auth/login">Login</a></li>
              <li><a href="/auth/register">Register</a></li>
            </ul>
          </nav>
        </header>
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
