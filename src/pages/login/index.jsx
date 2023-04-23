import LoginForm from "@/components/login/loginForm";


const containerStyles = "flex flex-col items-center justify-center " +
    "h-screen " +
    "text-light-gray " +
    "bg-gradient-to-b from-primary-gray to-dark-gray";
const headingStyles = "mb-12 text-primary-green text-6xl";

export default function Login() {
    return (
        <div className={containerStyles}>
            <h1 className={headingStyles}>Sign in</h1>
            <LoginForm />
        </div>
    )
}