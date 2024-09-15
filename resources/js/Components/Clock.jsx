import React, { useState, useEffect } from "react";

const Clock = () => {
    // State to hold the current time
    const [currentTime, setCurrentTime] = useState(new Date());

    // Function to update time
    const updateTime = () => {
        setCurrentTime(new Date());
    };

    // Set up interval to update time every second
    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Format date and time
    const dayOfWeek = currentTime.toLocaleDateString("en-US", {
        weekday: "long",
    });
    const formattedDate = currentTime.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <div>
            <div>
                <p className="text-xl font-semibold">{dayOfWeek}</p>
                <p className="text-[15px] font-medium text-gray-700">
                    {formattedDate}
                </p>
                <p className="text-2xl font-bold text-gray-800 font-mono">
                    {formattedTime}
                </p>
            </div>
        </div>
    );
};

export default Clock;
