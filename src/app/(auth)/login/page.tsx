import { Metadata } from "next";
import Link from "next/link";
import GoogleSignInButton from "./google/GoogleSignInButton";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
    title: "Login",
};

export default function Page() {
    return (
        <div className="mt-10">
            <h1 className="text-6xl text-center font-bold text-sky-600">linkora</h1>
            <div className="mt-10">
                <div className="w-full max-w-md overflow-hidden p-4 mx-auto rounded-xl bg-card shadow-2xl">
                    <h1 className="text-center text-2xl">Login to linkora</h1>
                    <div className="space-y-5 mt-5">
{/*                         <GoogleSignInButton /> */}
                        <LoginForm />
                        <Link href="/signup" className="block text-center font-bold text-sky-600 text-xl">
                            Don&apos;t have an account?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
