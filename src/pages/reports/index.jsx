import {ArrowLeftIcon} from "@heroicons/react/20/solid";

export default function Help() {
    function onBack() {
        window.history.back();
    }
    return (
        <div>
            <a onClick={onBack} className={"inline-flex"}><ArrowLeftIcon className="h-6 w-6 text-gray-500" /> back</a>
            <h1>this is Reports page</h1>
        </div>
    );
}