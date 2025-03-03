import "./globals.css";

export const metadata = {
  title: "about",
  description: "Description of the page",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>{children}</body>
    </html>
  );
}
