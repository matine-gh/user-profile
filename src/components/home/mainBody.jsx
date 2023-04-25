import Card from "@/components/common/card";

export default function MainBody() {

    const items = [
        {title: 'Introduction', key: 'introduction', backgroundColor: 'bg-light-rose', boxShadow: 'hover:shadow-rose'},
        {title: 'Panel Services', key: 'panelServices', backgroundColor: 'bg-light-orange', boxShadow: 'hover:shadow-orange', href: '/usersList'},
        {title: 'Notification', key: 'notification', backgroundColor: 'bg-light-lime', boxShadow: 'hover:shadow-lime'},
        {title: 'Registration Statics', key: 'registrationStatics', backgroundColor: 'bg-light-indigo', boxShadow: 'hover:shadow-indigo'},
    ];
    return (
        <div className={"flex-1 grid grid-cols-content grid-rows-content justify-center content-center max-w-6xl mx-auto"}>
            {items.map((item) =>
                    <Card key={item.key} cardData={item}/>
                )}
        </div>
    );
}