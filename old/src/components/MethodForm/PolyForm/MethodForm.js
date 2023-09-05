import React, { useState } from "react";
import FunctionInput from "./FunctionInput/FunctionInput";
const MethodForm = ({ initialValues, onSolve, solver, method }) => {

    const [inputValues, setInputValues] = useState({
        ...initialValues,
        inputs: [{ name: 'equation', value: '', error: '' }, ...initialValues.inputs]

    });
    const [animation, setAnimation] = useState(false);


    const clearState = () => {
        const newInputs = [...inputValues.inputs];
        for (let i in newInputs) {
            newInputs[i].error = "";
            newInputs[i].value = "";
        }
        setInputValues((prevState) => ({
            ...prevState,
            inputs: newInputs,
            canSubmit: false
        }))

    }
    const validateInput = (string, index) => {
        if (string === '') {
            const newInputs = [...inputValues.inputs];
            newInputs[index].error = "enter data !";
            setInputValues((prevState) => ({
                ...prevState,
                inputs: newInputs,
            }))
        }
        else if (/[a-df-zA-DF-Z]/.test(string) && index !== 0) {
            const newInputs = [...inputValues.inputs];
            newInputs[index].error = "Numbers only !";
            setInputValues((prevState) => ({
                ...prevState,
                inputs: newInputs,
            }))
        }
        else {
            const newInputs = [...inputValues.inputs];
            newInputs[index].error = "";
            setInputValues((prevState) => ({
                ...prevState,
                inputs: newInputs,
            }))
        }
    }
    const validateForm = () => {
        let valid = true;
        inputValues.inputs.forEach((input, index) => {
            validateInput(input.value, index);
        })
        inputValues.inputs.forEach(input => {
            if (input.error !== '') {
                valid = false;
            }
        });
        setInputValues((prevState) => ({
            ...prevState,
            canSubmit: valid
        }))

    }
    const handleInputChange = (event, index) => {

        const newInput = [...inputValues.inputs];
        newInput[index].error = '';
        setInputValues((prevState) => ({
            ...prevState,
            inputs: newInputs,
        }));
        const newInputs = [...inputValues.inputs];
        newInputs[index].value = event.target.value;

        setInputValues((prevState) => ({
            ...prevState,
            inputs: newInputs,


        }));

    };

    const submitHandler = (e) => {
        e.preventDefault();
        validateForm()

        if (!inputValues.canSubmit) {
            setAnimation(true);
            return;
        }
        let objKeys = []
        let inputsVals = []
        for (let i in inputValues.inputs) {
            inputsVals.push(inputValues.inputs[i].value)
            objKeys.push(inputValues.inputs[i].name)
        }
        let obj = {
            maxI: 15,
        }
        for (let i = 0; i < inputValues.inputs.length; i++) {
            obj[objKeys[i]] = inputsVals[i];
        }

        let x = solver(obj);
        onSolve(x);
    }


    const clearClickHandler = (e) => {
        clearState();
    }
    let filtered = inputValues.inputs.filter((item) => { return item.name !== "equation" });
    return (
        <form
            className={`${animation ? "error-animation" : ""}`}
            onAnimationEnd={() => {
                setAnimation(false)
            }}
            onSubmit={submitHandler}


        >
            <label htmlFor="">{method}</label>
            <FunctionInput
                inputState={inputValues.inputs.find((item) => item.name === "equation")}
                onChange={handleInputChange}
                onValidate={validateInput}
            />
            <div className="prps-input-container">

                {filtered.map((input, index) => {
                    index++;
                    return (
                        <div className="input-container-sm" key={input.name}>
                            <label>{input.label}</label>
                            <input
                                className={input.error ? "error-input" : null}
                                type="text"
                                name={input.name}
                                value={input.value}
                                onChange={(event) => handleInputChange(event, index)}
                                onBlur={(event) => validateInput(event.target.value, index)}
                            />

                            {input.error && <p className="error">{input.error}</p>}
                        </div>
                    )
                }
                )}
            </div>
            <button type="submit" className="submit-btn">Solve</button>
            <button type="button" className="submit-btn" onClick={clearClickHandler}>Clear</button>
        </form >
    )


};
export default MethodForm
