import React, { useState } from "react";
import useDebounce from "../useDebounce";

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value)
  const debouncedChange = useDebounce(onChange, 500)

  function handleChange(event) {
    setDisplayValue(event.target.value)
    debouncedChange(event.target.value)
  }

  return (
    <div className="flex justify-center w-full">
      <input 
        type="search" 
        value={displayValue} 
        onChange={handleChange}
        className="h-10 pl-2 my-4 transition-colors duration-200 border-2 border-solid rounded-lg outline-none w-60 md:w-80 lg:w-96 hover:border-primary-700 focus:border-primary-800"
        placeholder="Pesquisar anime"
      />
    </div>
  )
}

export default SearchInput;