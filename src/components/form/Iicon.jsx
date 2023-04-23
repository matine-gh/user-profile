import {EyeSlashIcon, UserCircleIcon} from "@heroicons/react/20/solid";
import {EyeIcon} from "@heroicons/react/24/outline";

export default function Iicon (props) {
    const {id, showPassword, handleClick} = props;
    let icon = null;
    const iconStyle = "inline h-6 w-6 mr-2 text-light-gray";

    switch(id) {
        case "username":
            icon = <UserCircleIcon className={iconStyle} />
            break;
        case "password":
            if (showPassword) {
                icon = <EyeSlashIcon className={iconStyle} onClic/>
            }else {
                icon = <EyeIcon className={iconStyle} />
            }
            break;
    }

    return (
        <button onClick={id==="password"? handleClick:null}>{icon}</button>
    );
}