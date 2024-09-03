import "@/styles/globals.css"

export const metadata = {
  title: "FinTrack",
  description: "A personal finance platform that seamlessly merges intuitive expense tracking with real-time bank integration, empowering users to take control of their financial journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
