import React from "react";

function MovieFilter(props) {
    const handleDropdownChange = (event) => {
        props.onChangeFilter(event.target.value);
    };

    const options = ["All", ...props.options()];
    const optionsList = options.map((option) => {
        return (
            <option value={option} key={option}>
                {option}
            </option>
        );
    });

    return (
        <div className="flex w-[380px] sm:w-[480px]  items-center justify-between my-4 bg-white p-4 rounded-lg">
            <label className="font-bold mb-2">Filter by year watched</label>
            <select
                name=""
                id=""
                className="py-2 px-2 font-bold rounded-lg text-center"
                value={props.selected}
                onChange={handleDropdownChange}
            >
                {optionsList}
            </select>
        </div>
    );
}

export default MovieFilter;
