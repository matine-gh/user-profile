import {StarIcon} from "@heroicons/react/20/solid";
import Itoggle from "@/components/common/Itoggle";


export default function Navbar() {
    return (
        <div className="bg-dark-gray border-b-2 border-light-gray p-4 inline-flex items-center justify-between">
            <Itoggle />
            <StarIcon className="h-12 w-12 text-primary-green" />
        </div>
    );
}