import "./MatrixForm.css"
import React, { useState } from "react";


const MatrixForm = ({ initialValues, solver, onSolve }) => {
    const [inputValues, setInputValues] = useState(initialValues);
    const validateInput = (number, row, col) => {

        if (number === "") {
            const newInputs = [...inputValues.matrix];
            newInputs[row][col].error = "enter data !";
            setInputValues((prevState) => ({
                ...prevState,
                matrix: newInputs,
            }))
        }
    }
    const isMatrixValid = () => {
        let isValid = true;
        const newInputs = [...inputValues.matrix];

        for (let i = 0; i < newInputs.length; i++) {
            for (let j = 0; j < newInputs[i].length; j++) {
                const input = newInputs[i][j];
                if (input.value.trim() === '') {
                    input.error = "enter data !";
                    isValid = false;
                } else {
                    input.error = "";
                }
            }
        }
        if (!isValid) {
            setInputValues(prevState => ({ ...prevState, matrix: newInputs }));
        }
        return isValid;
    };

    const handleChange = (event, row, col) => {
        const newMatrix = [...inputValues.matrix];
        newMatrix[row][col].error = "";
        setInputValues((prevState) => ({
            ...prevState,
            matrix: newMatrix,
            canSubmit: true,
        }))


        const newInputs = [...inputValues.matrix];
        newInputs[row][col].value = event.target.value;

        setInputValues((prevState) => ({
            ...prevState,
            matrix: newInputs,
        }))
    }
    const clearHandler = () => {
        const newMatrix = [...inputValues.matrix];
        newMatrix.forEach((row) => {
            row.forEach((item) => {
                item.error = "";
                item.value = "";
            })
        })
        setInputValues((prevState) => ({
            ...prevState,
            matrix: newMatrix,
            canSubmit: true,
        }))

        onSolve(null);

    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (!isMatrixValid()) {
            setInputValues((prevState) => ({
                ...prevState,
                canSubmit: false,
            }))
            return;
        }
        const values = inputValues.matrix.map(row => row.map(cell => parseInt(cell.value)));
        onSolve(solver(values));

    }
    const names = ["x1", "x2", "x3"]
    return (
        <>

            <form className="matrix-form" onSubmit={submitHandler}>
                <div className="matrix-input-container">
                    {inputValues.matrix.map((row, i) => {
                        return (
                            <div key={row[0].name}>
                                <div>{
                                    row.map((input, j) => {
                                        return (
                                            <input
                                                className={`matrix-input  ${(input.error) ? "error-input" : null}`}
                                                type="number"
                                                key={i + j}
                                                value={input.value}
                                                name={input.name}
                                                placeholder={(j > 2) ? input.name : names[j]}
                                                onChange={(e) => handleChange(e, i, j)}
                                                onFocus={(e) => e.target.placeholder = ""}
                                                onBlur={(e) => {
                                                    validateInput(e.target.value, i, j)
                                                    e.target.placeholder = (j > 2) ? input.name : names[j];
                                                }}
                                            ></input>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        )

                    })
                    }
                </div>
                {!inputValues.canSubmit && <p className="error-input">Please Fill Out All Fields</p>}
                <div className="button-container">
                    <button className="submit-btn" type="submit">Solve</button>
                    <button className="submit-btn" onClick={clearHandler} type="button">Clear</button>
                </div>




            </form >
        </>
    )
}

export default MatrixForm