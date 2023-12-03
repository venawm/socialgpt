import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Socialgpt",
  description: "Discover and share AI prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
            <main className="app">
              <Nav />
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
