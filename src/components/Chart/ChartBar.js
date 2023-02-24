import React from "react";

const ChartBar = (props) => {
    let barFillHeight = "0%";

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }
    return (
        <div className="h-full flex flex-col items-center">
            <div className="h-full w-full border-2 border-[#313131] bg-[#fec77a] overflow-hidden flex flex-col justify-end rounded-lg">
                <div
                    className="bg-[#855332] w-full transition-all ease-out delay-300"
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className="font-bold text-[0.5rem] text-center">
                {props.label}
            </div>
        </div>
    );
};

export default ChartBar;
