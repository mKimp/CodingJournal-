import { error } from "console";
import { useEffect, useRef, useState } from "react"
import { BasicInput } from "./basicInput";

export const Form = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setName(e.target.value);
  }

  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(name);
    const emailInputIsValid = isEmailInputValid();
    console.log(emailInputIsValid)
    if(!emailInputIsValid){
      return setError("Please type in the question name") 
    }
    else{
      setError("");
    
    }
  }

  const isEmailInputValid = () => {
    if(name === ""){
      return false;
    }
    else{
      return true;
    }

  }
  return(
    
    <div className="form-wrapper">
      <form>
        <h4>Question Info</h4>
        <BasicInput onChanged={handleOnChange} label={"Question Name"} value={name}/>
        {error && (
						<p className="error">{error}</p>
				)}
        <button onClick={(e) => {handleSubmit(e)}} className="primary">Submit</button>

      </form>
    </div>
  )
}