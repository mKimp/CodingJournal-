import { useState } from "react";

interface IBasicInputProps {
  onChanged:(e: React.ChangeEvent<HTMLInputElement>) => void;
  label:string;
  defaultText?: string;
  // value:string;
}


export const BasicInput = ({ onChanged, label, value}: IBasicInputProps & React.HTMLProps<HTMLInputElement>) => {
  // const initialiedProps:IBasicInputProps & React.HTMLProps<HTMLInputElement>= {
  //   // onChange: (e) => null,
  //   label:"",
  //   defaultText: value,
  // }
  const [realValue, setRealValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRealValue(e.target.value);
    onChanged(e);
  }

  return (
    <div className="basic-input">
      <label htmlFor="question-name">{label}</label>
      <input type="text" value={realValue} onChange={handleChange}/>
    </div>
  )
}