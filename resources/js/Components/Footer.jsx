import React from "react";

const Footer = () => {
    return (
        <footer className="footer bg-[#B3C8CF] text-gray-800 items-center p-4 rounded-b-3xl">
            <aside className="grid-flow-col items-center">
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved
                    by Cath
                </p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a
                    href="https://www.weatherapi.com/"
                    title="Free Weather API"
                    className="h-auto"
                >
                    <img
                        src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
                        alt="Weather data by WeatherAPI.com"
                        border="0"
                    />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
