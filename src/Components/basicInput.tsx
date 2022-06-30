import { useState } from "react";

interface IBasicInputProps {
  onChanged ?:(e: React.ChangeEvent<HTMLInputElement>)=> void;
  onNumberChanged ?:(e: React.ChangeEvent<HTMLInputElement>) => void;
  label:string;
  defaultText?: string;
}


export const BasicInput = ({ onChanged,  onNumberChanged, label, value}: IBasicInputProps & React.HTMLProps<HTMLInputElement>) => {

  const [realValue, setRealValue] = useState(value);
  const [numberValue, setNumberValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRealValue(e.target.value);
    if(onChanged)
      onChanged(e);
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberValue(e.target.value);
    if(onNumberChanged)
      onNumberChanged(e);
  }

  return (
    <div className="basic-input">
      <label htmlFor="question-name">{label}</label>
      {onChanged ? <input type="text" value={realValue} onChange={handleChange}/> :       <input type="text" value={numberValue} onChange={handleNumberChange}/>
}
    </div>
  )
}