import { useState } from "react";

function MySlider({onChange}) {
  const [value, setValue] = useState(128);
  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange){
      onChange(e.target.value);
    }
  };
  return (
    <div>
      <input
        type="range"
        width = "200"
        min="0"
        max="255"
        value={value}
        onChange={handleChange}
      />
      <span>{value}</span>
    </div>
  );
}

export default MySlider;
