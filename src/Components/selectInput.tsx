import { useState } from "react"

interface SelectProps {
  label:string
  onSelectedChanged: (e: React.ChangeEvent<HTMLSelectElement> ) => void;
}

export const SelectInput = ({label, onSelectedChanged}:SelectProps & React.HTMLProps<HTMLSelectElement>) => {
  const initializedValue = {
    options:[
      {
        label: "Select a technique",
        value: "Select a technique",
      },
      {
        label: "Dynamic Programming",
        value: "Dynamic Programming",
      },
      {
        label: "Two Pointers",
        value: "Two Pointers",
      },
      {
        label: "Binary Search",
        value: "Binary Search",
      },
      {
        label: "Back Tracking",
        value: "Back Tracking",
      },
    ]
  };

  const [selectedValue, setSelectedValue] = useState("Select a technique");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    onSelectedChanged (e);
  }

  return (
    <div className="select-wrapper">
    <label htmlFor="select">{label}</label>
    <select value={selectedValue} onChange={(e) => handleChange(e)}>
        {
          initializedValue.options.map((option, i) => {
            return <option key={option.label} value={option.value}>{option.label}</option>;
          })
        }
    </select>
    </div>
  )
}