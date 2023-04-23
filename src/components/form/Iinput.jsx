import {useState} from "react";
import Iicon from "@/components/form/Iicon";

export default function Iinput(props) {

    const {id, formik} = props;
    const [showPassword, setShowPassword] = useState(false);

    const labelStyles = "border-b-solid border-b-2 border-b-lighter-gray py-2.5";

    function handleClick() {
        setShowPassword(!showPassword);
    }




    return (
        <label className={labelStyles}>
            <Iicon id={id} showPassword={showPassword} handleClick={handleClick}/>
            <input
                id={id}
                name={id}
                type={
                    id === "username"?
                        "text"
                        :showPassword? "text":"password"
                }
                placeholder={id}
                onChange={formik.handleChange}
                value={formik.values[id]}
                className="bg-inherit focus-visible:outline-none"
            />
        </label>
    );
}