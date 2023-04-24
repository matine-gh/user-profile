import {useFormik} from "formik";
import Ibutton from "@/components/common/Ibutton";
import InputContainer from "@/components/form/inputContainer";
import {useState} from "react";

export default function LoginForm() {

    const [isButtonDisable, setIsButtonDisable] = useState(true);

    const formik = useFormik({
        initialValues: { username: "", password: "" },
        onSubmit: values => {
            localStorage.setItem('loginData', JSON.stringify(values));
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

            if (Object.keys(errors).length === 0) {setIsButtonDisable(false)}
            return errors;
        }
    })

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