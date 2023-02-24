import React from "react";

function MovieDate(props) {
    const newDate = new Date(props.date);
    const month = newDate.toLocaleString("en-US", { month: "long" });
    const day = newDate.toLocaleString("en-US", { day: "2-digit" });
    const year = new Date(props.date).getFullYear();
    return (
        <div className="flex flex-col p-2 rounded-lg items-center justify-center bg-[#3C3B3B] text-white text-xs w-[4rem]">
            <p>{month}</p>
            <p>{year}</p>
            <p>{day}</p>
        </div>
    );
}

export default MovieDate;
