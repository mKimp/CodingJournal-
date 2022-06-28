import { error } from "console";
import { useEffect, useRef, useState } from "react"
import { BasicInput } from "./basicInput";
import { SelectInput } from "./selectInput";

export const Form = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [valueSelected, setValue] = useState("");

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setName(e.target.value);
  }
  
  const handleOnSelectedChange = (e:React.ChangeEvent<HTMLSelectElement> ) => {
    setValue(e.target.value);
  }
  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const emailInputIsValid = isEmailInputValid(name);
    const selectIsValid = isEmailInputValid(valueSelected);

    console.log(emailInputIsValid);
    console.log(name)
    if(!emailInputIsValid){
      return setError("Please type in the question name") 
    }
    if(!selectIsValid){
      return setError("Please choose the algorithm") 
    }
    else{
      setError("");
      fetch("http://localhost:8000/form")
      .then(res => res.json())
      .then(data => console.log(data))
      return true;
    }
  }
  const isEmailInputValid = (value:string) => {
    if(value === ""){
      return false;
    }
    return true;
  }
  return(
    
    <div className="form-wrapper">
      <form>
        <h4>Question Info</h4>
        <BasicInput onChanged={handleOnChange} label={"Question Name"} value={name}/>
        <SelectInput label="Algorithms" onSelectedChanged = {handleOnSelectedChange} />

        {error && (
						<p className="error">{error}</p>
				)}

        <button onClick={(e) => {handleSubmit(e)}} className="primary">Submit</button>

      </form>
    </div>
  )
}