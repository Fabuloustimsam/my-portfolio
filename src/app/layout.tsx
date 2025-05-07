// app/layout.tsx

import "./globals.css"; // Global styles (optional)
import { ReactNode } from "react";

export const metadata = {
  title: "Your Site Title",
  description: "Your site description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
