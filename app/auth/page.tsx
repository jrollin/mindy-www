import LoginForm from "../components/auth/loginForm";

export default async function Home() {
    return (
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ">
            <main className="w-40">
                <LoginForm />
            </main>
        </div>
    );
}
