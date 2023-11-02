import Header from "@/components/header";
import { NextPage } from "next";

const page: NextPage = () => {
    return (
        <>
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header />
                <main>
                    <h1>TODO</h1>
                </main>
            </div>
        </>
    );
};

export default page;
