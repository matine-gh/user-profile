import Itoggle from "@/components/common/Itoggle";


export default function Navbar() {
    return (
        <div className="bg-dark-gray text-primary-green border-b-2 border-light-gray p-4 inline-flex items-center justify-between">
            <Itoggle />
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="100" height="50"
                 viewBox="0 0 50 50"
                 className="fill-lighter-gray"
            >
                <path d="M 0 14 L 0 36 L 49.992188 36 L 50 36 L 50 14 L 0 14 z M 25 16 C 38.951 16 49.017578 20.084 49.017578 25 C 49.017578 29.916 38.958 34 25 34 C 11.042 34 0.97460938 29.916 0.97460938 25 C 0.97460938 20.084 11.049 16 25 16 z M 44.054688 20.904297 C 43.540687 20.883297 43.111656 21.284828 43.097656 21.798828 C 43.082656 21.818828 43.082844 21.838375 43.089844 21.859375 C 43.075844 22.387375 43.490391 22.830703 44.025391 22.845703 C 44.553391 22.859703 44.996719 22.445156 45.011719 21.910156 L 45.011719 21.861328 C 45.018719 21.340328 44.610844 20.911297 44.089844 20.904297 L 44.054688 20.904297 z M 43.990234 21.085938 L 44.046875 21.085938 C 44.461875 21.078937 44.8055 21.409219 44.8125 21.824219 L 44.8125 21.859375 C 44.8265 22.281375 44.488406 22.641437 44.066406 22.648438 C 43.644406 22.662437 43.286297 22.324344 43.279297 21.902344 L 43.279297 21.853516 C 43.265297 21.445516 43.582234 21.099937 43.990234 21.085938 z M 4.9882812 21.283203 C 5.0942812 21.494203 5.0957031 21.698156 5.0957031 21.910156 L 5.0957031 27.949219 C 5.0957031 28.160219 5.0942813 28.364172 4.9882812 28.576172 L 9.8046875 28.576172 C 9.6986875 28.365172 9.6972656 28.161219 9.6972656 27.949219 L 9.6972656 21.910156 L 9.6992188 21.910156 C 9.6992188 21.699156 9.6986875 21.495203 9.8046875 21.283203 L 4.9882812 21.283203 z M 11.902344 21.283203 C 12.008344 21.495203 12.009766 21.699156 12.009766 21.910156 L 12.009766 27.949219 C 12.009766 28.161219 12.008344 28.365172 11.902344 28.576172 L 16.330078 28.576172 C 16.224078 28.364172 16.224609 28.160219 16.224609 27.949219 L 16.224609 25.408203 C 16.224609 25.408203 17.442969 27.259656 17.667969 27.597656 C 17.892969 27.935656 18.097656 28.365172 18.097656 28.576172 L 23.412109 28.576172 C 23.215109 28.385172 23.045625 28.174219 22.890625 27.949219 C 22.615625 27.533219 20.482422 24.289062 20.482422 24.289062 C 20.482422 24.289063 21.920828 22.536562 22.173828 22.226562 C 22.461828 21.874562 22.813859 21.494203 23.130859 21.283203 L 18.511719 21.283203 C 18.511719 21.495203 18.208891 21.951391 17.962891 22.275391 C 17.638891 22.712391 16.224609 24.550781 16.224609 24.550781 L 16.224609 21.910156 C 16.224609 21.698156 16.224078 21.494203 16.330078 21.283203 L 11.902344 21.283203 z M 24.179688 21.283203 C 24.285688 21.494203 24.285156 21.698156 24.285156 21.910156 L 24.285156 27.949219 C 24.285156 28.160219 24.285688 28.364172 24.179688 28.576172 L 32.726562 28.576172 L 32.726562 26.556641 C 32.515563 26.662641 32.311609 26.662109 32.099609 26.662109 L 28.501953 26.662109 L 28.501953 25.705078 L 31.958984 25.705078 L 31.958984 24.164062 L 28.501953 24.164062 L 28.501953 23.199219 L 32.099609 23.199219 C 32.310609 23.199219 32.514563 23.199828 32.726562 23.298828 L 32.726562 21.283203 L 24.179688 21.283203 z M 43.6875 21.283203 L 43.6875 22.4375 L 43.857422 22.4375 L 43.857422 22.029297 L 44.103516 22.029297 L 44.328125 22.4375 L 44.517578 22.4375 L 44.271484 21.994141 C 44.398484 21.924141 44.476562 21.79725 44.476562 21.65625 C 44.476562 21.45225 44.321188 21.290203 44.117188 21.283203 L 43.6875 21.283203 z M 35.943359 21.289062 C 35.971359 21.501062 35.893406 21.706969 35.816406 21.917969 L 33.626953 27.957031 C 33.555953 28.190031 33.444875 28.400984 33.296875 28.583984 L 36.949219 28.583984 C 36.921219 28.371984 37.000312 28.168031 37.070312 27.957031 C 37.141313 27.746031 37.21875 27.542969 37.21875 27.542969 L 37.259766 27.429688 L 39.927734 27.429688 L 39.970703 27.535156 C 40.069703 27.781156 40.138672 27.949219 40.138672 27.949219 C 40.223672 28.161219 40.300297 28.365172 40.279297 28.576172 L 44.912109 28.576172 C 44.757109 28.393172 44.636406 28.181219 44.566406 27.949219 C 44.411406 27.540219 42.434953 22.374969 42.251953 21.917969 C 42.173953 21.705969 42.061188 21.500062 42.117188 21.289062 L 35.943359 21.289062 z M 43.855469 21.458984 L 44.087891 21.458984 L 44.109375 21.458984 C 44.222375 21.458984 44.298828 21.556922 44.298828 21.669922 C 44.298828 21.782922 44.200891 21.866375 44.087891 21.859375 L 44.087891 21.867188 L 43.855469 21.867188 L 43.855469 21.458984 z M 38.554688 23.71875 C 38.589688 23.88075 38.639313 24.042266 38.695312 24.197266 L 39.34375 25.886719 L 37.816406 25.886719 C 38.132406 25.006719 38.406734 24.267266 38.427734 24.197266 C 38.484734 24.042266 38.526688 23.88075 38.554688 23.71875 z"></path>
            </svg>
        </div>
    );
}