import React from 'react'

function MobileControls() {
  return (
    <div>

      <div className="radio">
        <input className="radio__input" type="radio" id="answer" name="puzzle-input"></input>
        <label className="radio__label radio__label--left" for="answer">Answer</label>

        <input className="radio__input" type="radio" id="note" name="puzzle-input"></input>
        <label className="radio__label radio__label--right" for="note">Note</label>
      </div>



    </div>
  )
}

export default MobileControls