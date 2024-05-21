import "./globals.css";

export const metadata = {
  title: "oscar's clothes",
  description: "oscar's brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
