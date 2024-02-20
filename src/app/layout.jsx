import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon-32x32.png" />
      </head>
      <body className="overflow-x-hidden">
        <Header></Header>
        {children}</body>
    </html>
  );
}
