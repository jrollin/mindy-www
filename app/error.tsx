"use client";

import Header from "@/components/header";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header />

            <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    <div>
                        <h2>Something went wrong!</h2>
                        <button onClick={() => reset()}>Try again</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
