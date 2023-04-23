import Navbar from "@/components/common/navbar";
import Sidebar from "@/components/common/sidebar";
import MainBody from "@/components/home/mainBody";

export default function Home() {
    return (
        <div className='h-screen flex flex-col'>
        <Navbar />
        <div className={"flex flex-col sm:flex-row bg-dark-gray flex-1"}>
            <Sidebar />
            <MainBody />
        </div>
        </div>
    );
}
