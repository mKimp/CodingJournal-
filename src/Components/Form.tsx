import { error } from "console";
import { application } from "express";
import { useEffect, useRef, useState } from "react"
import { json } from "stream/consumers";
import { BasicInput } from "./basicInput";
import { SelectInput } from "./selectInput";

export const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [valueSelected, setValue] = useState("");

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
      setName(e.target.value);
  }

  const handleOnNumberChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setNumber(e.target.value);
}
  
  const handleOnSelectedChange = (e:React.ChangeEvent<HTMLSelectElement> ) => {
    setValue(e.target.value);
  }
  const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const emailInputIsValid = isEmailInputValid(name);
    const selectIsValid = isEmailInputValid(valueSelected);

    if(!emailInputIsValid){
      return setError("Please type in the question info") 
    }
    if(!selectIsValid){
      return setError("Please choose the algorithm") 
    }
    else{
      setError("");
      console.log(name);

      console.log(number)
      const dataToServer = {
        questionName: name,
        questionNumber: number,
        questionType:valueSelected
      }
      // fetch("http://localhost:8000/form", {
      //   method: "POST",
      //   mode:"cors",
      //   credentials:"same-origin",
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: `{
      //     "questionName": ${name}
      //   }`
      // })
      // .then (data => {
      //   console.log(data);
      // })

      const response = await fetch("http://localhost:8000/form", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToServer),
      });

      response.json().then(data => {
        console.log(data);
      })
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
        <BasicInput onNumberChanged={handleOnNumberChange} label={"Question Number (Optional)"} value={number} name="questionNumber"/>
        <SelectInput label="Algorithms" onSelectedChanged = {handleOnSelectedChange} />

        {error && (
						<p className="error">{error}</p>
				)}

        <button onClick={(e) => {handleSubmit(e)}} className="primary">Submit</button>

      </form>
    </div>
  )
}