import "@/styles/globals.css";
import Nav from "@/components/Nav";

export const metadata = {
    title: "Dashboard",
    description: "A personal finance platform that seamlessly merges intuitive expense tracking with real-time bank integration, empowering users to take control of their financial journey.",
};

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-slate-100">
                <Nav />
                {children}
            </body>
        </html>
    );
}