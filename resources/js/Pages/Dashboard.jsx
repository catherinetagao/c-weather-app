import Clock from "@/Components/Clock";
import Footer from "@/Components/Footer";
import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { data } = usePage().props;
    console.log(data);
    return (
        <AuthenticatedLayout
        // header={
        //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
        //         Dashboard
        //     </h2>
        // }
        >
            {/* <Head title="Dashboard" /> */}
            <div className="bg-[url('https://img.freepik.com/free-photo/amazing-beautiful-sky-with-clouds_58702-1647.jpg?w=1060&t=st=1726356538~exp=1726357138~hmac=4d4a72ed8a23e43bfce3110e02d5a9abc1cb78c5f6ba78bffca26cab90377b4b')] bg-cover bg-center">
                <div className="py-10 bg-center bg-cover backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            <div className="col-span-1">
                                <div className="bg-white bg-opacity-60 shadow-lg rounded-3xl h-[80vh] flex flex-col">
                                    <div className="p-6 text-gray-900 flex-1 overflow-auto">
                                        <div className="relative mb-4">
                                            {/* <select className="select select-bordered bg-transparent w-full select-sm text-xs">
                                                <option value="option1">
                                                    Option 1
                                                </option>
                                                <option value="option2">
                                                    Option 2
                                                </option>
                                            </select> */}
                                        </div>

                                        <div className="mb-4">
                                            <h5 className="text-xl font-semibold">
                                                {data.location.country}
                                            </h5>
                                            <h5 className="text-xl font-semibold">
                                                {data.location.name} City,{" "}
                                                {data.location.region}
                                            </h5>
                                            <img
                                                src="https://static.vecteezy.com/system/resources/previews/024/825/180/non_2x/3d-weather-icon-day-free-png.png"
                                                alt="Weather Icon"
                                                className="w-full h-auto rounded-lg animate-pulse"
                                            />
                                        </div>

                                        <h1 className="text-2xl font-bold mb-2">
                                            {data.current.temp_c} °C
                                        </h1>

                                        <h5 className="text-xl font-semibold">
                                            <Clock>
                                                {data.current.last_updated}
                                            </Clock>
                                        </h5>

                                        <div className="font-medium mb-4">
                                            <div className="flex items-center">
                                                <img
                                                    src={
                                                        data.current.condition
                                                            .icon
                                                    }
                                                    alt="Condition Icon"
                                                />
                                                <span className="flex-1">
                                                    {
                                                        data.current.condition
                                                            .text
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 md:col-span-4">
                                <div className="bg-white bg-opacity-60 shadow-lg rounded-3xl h-[80vh] text-gray-900">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                                        <div className="bg-[#B3C8CF] border border-gray-200 rounded-3xl shadow-md flex flex-col items-center p-4">
                                            <h3 className="text-sm font-semibold">
                                                Sunrise
                                            </h3>
                                            <p>
                                                {
                                                    data.forecast.forecastday[0]
                                                        .astro.sunrise
                                                }
                                            </p>
                                        </div>
                                        <div className="bg-[#B3C8CF] border border-gray-200 rounded-3xl shadow-md flex flex-col items-center p-4">
                                            <h3 className="text-sm font-semibold">
                                                Sunset
                                            </h3>
                                            <p>
                                                {
                                                    data.forecast.forecastday[0]
                                                        .astro.sunset
                                                }
                                            </p>
                                        </div>
                                        <div className="bg-[#B3C8CF] border border-gray-200 rounded-3xl shadow-md flex flex-col items-center p-4">
                                            <h3 className="text-sm font-semibold">
                                                Moonrise
                                            </h3>
                                            <p>
                                                {
                                                    data.forecast.forecastday[0]
                                                        .astro.moonrise
                                                }
                                            </p>
                                        </div>
                                        <div className="bg-[#B3C8CF] border border-gray-200 rounded-3xl shadow-md flex flex-col items-center p-4">
                                            <h3 className="text-sm font-semibold">
                                                Moonset
                                            </h3>
                                            <p>
                                                {
                                                    data.forecast.forecastday[0]
                                                        .astro.moonset
                                                }
                                            </p>
                                        </div>
                                        <div className="bg-[#B3C8CF] border border-gray-200 rounded-3xl shadow-md flex flex-col items-center p-4">
                                            <h3 className="text-sm font-semibold">
                                                Moon Illumination
                                            </h3>
                                            <p>
                                                {
                                                    data.forecast.forecastday[0]
                                                        .astro.moon_illumination
                                                }
                                            </p>
                                        </div>
                                        <div className="bg-[#B3C8CF] border border-gray-200 rounded-3xl shadow-md flex flex-col items-center p-4">
                                            <h3 className="text-sm font-semibold">
                                                Moon Phase
                                            </h3>
                                            <p>
                                                {
                                                    data.forecast.forecastday[0]
                                                        .astro.moon_phase
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 text-gray-900">
                                            <div className="bg-[#B3C8CF] border border-gray-200 rounded-3xl shadow-md p-5 text-center">
                                                <h3 className="text-xl font-semibold mb-2">
                                                    DEW POINT
                                                </h3>
                                                <h3 className="text-xl font-semibold mb-2">
                                                    {data.current.dewpoint_c} °C
                                                </h3>
                                            </div>
                                            <div className="bg-[#B3C8CF] border border-gray-200 rounded-3xl shadow-md p-5 text-center">
                                                <h3 className="text-xl font-semibold mb-2">
                                                    HEAT INDEX
                                                </h3>
                                                <h3 className="text-xl font-semibold mb-2">
                                                    {data.current.feelslike_c}{" "}
                                                    °C
                                                </h3>
                                            </div>
                                            <div className="bg-[#B3C8CF] border border-gray-200 rounded-3xl shadow-md p-5 text-center">
                                                <h3 className="text-xl font-semibold mb-2">
                                                    HUMIDITY
                                                </h3>
                                                <h3 className="text-xl font-semibold mb-2">
                                                    {data.current.humidity}
                                                </h3>
                                            </div>
                                            <div className="bg-[#B3C8CF] border border-gray-200 rounded-3xl shadow-md p-5 text-center">
                                                <h3 className="text-xl font-semibold mb-2">
                                                    UV INDEX
                                                </h3>
                                                <h3 className="text-xl font-semibold mb-2">
                                                    {data.current.uv}
                                                </h3>
                                            </div>
                                            <div className="bg-[#B3C8CF] border border-gray-200 rounded-3xl shadow-md p-5 text-center">
                                                <h3 className="text-xl font-semibold mb-2">
                                                    GUST
                                                </h3>
                                                <h3 className="text-xl font-semibold mb-2">
                                                    {data.current.gust_mph} MPH
                                                </h3>
                                            </div>
                                            <div className="bg-[#B3C8CF] border border-gray-200 rounded-3xl shadow-md p-5 text-center">
                                                <h3 className="text-xl font-semibold mb-2">
                                                    WIND
                                                </h3>
                                                <h3 className="text-xl font-semibold mb-2">
                                                    {data.current.windchill_c}{" "}
                                                    °C
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="px-1">
                                            <Footer />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
