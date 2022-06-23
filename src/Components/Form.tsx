import { useState } from "react"

export const Form = () => {
  const [inputs, setInputs] = useState();

  const handleOnchange = () => {
    
  }





  return(
    <div className="form-wrapper">
      <form className="question-form">
          <label htmlFor="question">Question Name</label>
          <input type="text" id="question"/>

          <label htmlFor="codingNumber">Coding Number (optional)</label>
          <input type="text" id="codingNumber"/>

          <label htmlFor="codingSource">Coding Source(optional)</label>
          <input type="text" id="codingSource"/>

        <label htmlFor="categories">Categories</label>
        <select name="categories" id="catergories">
          <option value="DynamicProgramming">Dynamic Programming</option>
          <option value="Backtracking">Backtracking</option>
          <option value="twoPointers">Two Pointers</option>

        </select>

        <textarea name="note" id="note">This is a test area</textarea>
      </form>
    </div>
  )
}