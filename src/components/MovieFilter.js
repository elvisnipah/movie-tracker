import React from "react";

function MovieFilter(props) {
  const handleDropdownChange = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="flex w-[380px] sm:w-[480px] max-w-[480px] items-center justify-between my-4 bg-white p-4 rounded-lg">
      <label className="font-bold mb-2">Filter by year watched</label>
      <select
        name=""
        id=""
        className="py-2 px-4 font-bold rounded-lg"
        value={props.selected}
        onChange={handleDropdownChange}
      >
        <option value="All">All Movies</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default MovieFilter;
