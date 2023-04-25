import LoginForm from "@/components/login/loginForm";
import {useRouter} from "next/router";
import {useEffect} from "react";


export default function Login() {
    const containerStyles = "flex flex-col items-center justify-center " +
        "h-screen " +
        "text-lighter-gray " +
        "bg-gradient-to-b from-primary-gray to-dark-gray";
    const headingStyles = "mb-12 text-primary-green text-6xl";

    const router = useRouter();

    useEffect(() => {
        if(localStorage.getItem('loginData') !== null){
            router.replace('/home')
        }
    }, [])

    return (
        <div className={containerStyles}>
            <h1 className={headingStyles}>Sign in</h1>
            <LoginForm />
        </div>
    )
}