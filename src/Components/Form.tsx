import { useState } from "react"
import { text } from "stream/consumers";

export const Form = () => {
  type Target = {
    name:String;
    value:String
  }
  const initialiValues = {
    questionName: "",
    codingNumber: null,
    codingSource: null,
  }
  const [inputs, setInputs] = useState(initialiValues);
  const [textArea, setTextArea] = useState("");

  const handleOnchange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target as HTMLInputElement;
    const value = event.value;
    const name = event.name;
    setInputs({...inputs, [name]:value})
    console.log(inputs);
  } 

  const handleTextArea = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
    console.log(textArea);
  }

  const handleSubmit = () => {

  }
  return(
    <div className="form-wrapper">
      <form className="question-form">
          <label htmlFor="question">Question Name</label>
          <input name="question" type="text" id="question" onChange={(e) => handleOnchange(e)}/>

          <label htmlFor="codingNumber">Coding Number (optional)</label>
          <input name="codingNumber" type="text" id="codingNumber"  onChange={(e) => handleOnchange(e)}/>

          <label htmlFor="codingSource">Coding Source(optional)</label>
          <input name="codingSource" type="text" id="codingSource" onChange={(e) => handleOnchange(e)}/>

        <label htmlFor="categories">Categories</label>
        <select name="categories" id="catergories">
          <option value="DynamicProgramming">Dynamic Programming</option>
          <option value="Backtracking">Backtracking</option>
          <option value="twoPointers">Two Pointers</option>

        </select>
        <textarea value={textArea} name="note" id="note" placeholder="Your note here"onChange={(e) => handleTextArea(e)}>This is a test area</textarea>
        <button className="btn-submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}