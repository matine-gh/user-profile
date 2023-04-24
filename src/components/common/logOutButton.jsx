import {ArrowRightOnRectangleIcon} from "@heroicons/react/20/solid";
import {useRouter} from "next/router";

export default function LogOutButton(props) {

    const router = useRouter();
    const {pseudoStyles} = props;

    function onLogOut() {
        localStorage.removeItem("loginData");
        router.replace('/login')
    }


    return (
        <a className={`inline-flex ${pseudoStyles}`} onClick={onLogOut}>
            LOG OUT
            <ArrowRightOnRectangleIcon className="h-6 w-6 ml-2" />
        </a>
    );
}