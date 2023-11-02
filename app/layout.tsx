import "./globals.css";
import type { Metadata } from "next";
import { ReduxProvider } from "./store/reduxProviders";

export const metadata: Metadata = {
    title: "Mindy",
    description: "Second brain",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ReduxProvider>
            <html lang="en">
                <body className="font-inter antialiased bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400">
                    <div className="flex h-screen overflow-hidden">{children}</div>
                </body>
            </html>
        </ReduxProvider>
    );
}
