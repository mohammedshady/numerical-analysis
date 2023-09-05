import React from "react";

const FunctionInput = (props) => {

    const inputFunction = props.inputState;
    const handleInputChange = props.onChange;
    const validateInput = props.onValidate;



    return (
        <div className="fun-input-container">
            <input type="text"
                className={inputFunction.error ? "error-input" : null}
                onChange={(event) => handleInputChange(event, 0)}
                name={inputFunction.name}
                value={inputFunction.value}
                onBlur={(event) => validateInput(event.target.value, 0)}
            ></input>
            {inputFunction.error && <p className="error">{inputFunction.error}</p>}
        </div>
    )

}
export default FunctionInput;