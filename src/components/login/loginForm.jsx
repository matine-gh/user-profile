import {useFormik} from "formik";
import Ibutton from "@/components/common/Ibutton";
import InputContainer from "@/components/form/inputContainer";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function LoginForm() {

    const [isButtonDisable, setIsButtonDisable] = useState(true);

    const router = useRouter();

    const formik = useFormik({
        initialValues: { username: "", password: "" },
        onSubmit: values => {
            localStorage.setItem('loginData', JSON.stringify(values));
            router.replace('/home')
        },
        validate: values => {
            const errors = {};
            if (values.username === "") {
                errors.username = 'username is required';
            }

            //TODO: is password is wrong
            if (values.password === "") {
                errors.password = 'password is required';
            }
            return errors;

        }
    })
    useEffect(() => {
        if (formik.values.username !== formik.initialValues.username && formik.values.password !== formik.initialValues.password) {
            setIsButtonDisable(false)
        }else {
            setIsButtonDisable(true)
        }
    }, [formik.values]);

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col content-between h-2/6">
            <div className="h-full">
                <InputContainer  id={'username'} formik={formik}/>
                <InputContainer  id={'password'} formik={formik}/>
            </div>

            <Ibutton type="submit" text={'LOG IN'} isButtonDisable={isButtonDisable}/>

        </form>
    );
}