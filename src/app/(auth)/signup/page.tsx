import signupImage from "@/assets/signup-image.jpg";
import { Metadata } from "next";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
    title: "Sign Up",
};

export default function Page() {
    return (
        <div className="mt-10">
            <h1 className="text-6xl text-center font-bold text-sky-600">linkora</h1>
            <div className="mt-10">
                <div className="w-full max-w-md overflow-hidden p-4 mx-auto rounded-xl bg-card shadow-2xl">
                    <h3 className="text-3xl font-semibold text-center">Create a new account</h3>
                    <p className="text-muted-foreground text-center">
                        It&apos;s quick and easy.
                    </p>
                    <div className="space-y-5 mt-5">
                        <SignUpForm />
                        <Link href="/login" className="block text-center font-bold text-sky-600 text-xl">
                            Already have an account?
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}