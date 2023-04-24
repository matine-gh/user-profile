import {
    ChartBarIcon,
    Cog6ToothIcon,
    HomeIcon,
    InboxStackIcon,
    LinkIcon,
    QuestionMarkCircleIcon,
    UserGroupIcon
} from "@heroicons/react/20/solid";
import LogOutButton from "@/components/common/logOutButton";

export default function Sidebar() {

    const iconStyles = "h-6 w-6 mr-2";
    const pseudoStyles = "hover:text-primary-green hover:text-lg active:text-primary-green";

    const sidebarItems = [
        {
            name: 'Home',
            id: 1,
            icon: <HomeIcon className={iconStyles} />,
            route: '/home'
        },
        {
            name: 'Users List',
            id: 2,
            icon: <UserGroupIcon className={iconStyles} />,
            route: '/usersList'
        },
        {
            name: 'Reports',
            id: 3,
            icon: <ChartBarIcon className={iconStyles} />,
            route: '/reports'
        },
        {
            name: 'Requests',
            id: 4,
            icon: <InboxStackIcon className={iconStyles} />,
            route: '/requests'
        },
        {
            name: 'Setting',
            id: 5,
            icon: <Cog6ToothIcon className={iconStyles} />,
            route: '/setting'
        },
        {
            name: 'Links',
            id: 6,
            icon: <LinkIcon className={iconStyles} />,
            route: '/links'
        },
        {
            name: 'Help',
            id: 7,
            icon: <QuestionMarkCircleIcon className={iconStyles} />,
            route: '/help'
        }
    ];
    return (
        <aside id="default-sidebar"
               className="w-52 sm:border-t-2 border-light-gray text-lighter-gray transition-transform sm:translate-x-0"
               aria-label="Sidebar">
            <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-50">
                <ul className={"flex-1"}>
                    {
                        sidebarItems.map((item) =>
                            <li key={item.id} className={`my-6 ${pseudoStyles}`}>
                                <a href={item.route} className={"inline-flex"}>
                                    {item.icon}
                                    {item.name}
                                </a>
                            </li>
                        )
                    }
                </ul>

                <LogOutButton pseudoStyles={pseudoStyles}/>
            </div>
        </aside>
    );
}