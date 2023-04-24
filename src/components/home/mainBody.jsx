export default function MainBody() {

    const items = [
        {title: 'Introduction', backgroundColor: 'bg-light-rose', boxShadow: 'hover:shadow-rose'},
        {title: 'Panel Services', backgroundColor: 'bg-light-orange', boxShadow: 'hover:shadow-orange', href: '/usersList'},
        {title: 'Notification', backgroundColor: 'bg-light-lime', boxShadow: 'hover:shadow-lime'},
        {title: 'Registration Statics', backgroundColor: 'bg-light-indigo', boxShadow: 'hover:shadow-indigo'},
    ];
    return (
        <div className={"flex-1 grid grid-cols-content grid-rows-content justify-center content-center max-w-6xl mx-auto"}>
            {items.map((item) =>
                    <a key={item.title} href={item.href}
                         className={`${item.backgroundColor} ${item.boxShadow} 
                                    inline-flex items-center justify-center m-4 rounded-xl
                                    text-2xl text-dark-gray font-extrabold cursor-pointer`}
                    >
                        <p>{item.title}</p>
                    </a>
                )}
        </div>
    );
}