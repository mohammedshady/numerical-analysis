import React, { useState } from "react";
// import MatrixForm from "../MethodForm/MatrixForm/MatrixForm";

import MatrixForm from '../../../components/MethodForm/MatrixForm/MatrixForm'

const GaussElmination = () => {
    const [dimentions, setDimentions] = useState({
        rows: null,
        cols: null
    });

    //change input in one component and pass data from there
    const rowChangeHandler = (e) => {
        setDimentions((prevState) => ({
            ...prevState,
            rows: e.target.value
        }))
    }
    const colChangeHandler = (e) => {
        setDimentions((prevState) => ({
            ...prevState,
            cols: e.target.value
        }))
    }
    let matrix = []
    for (let i = 0; i < dimentions.rows; i++) {
        matrix[i] = [];
        for (let j = 0; j <= (dimentions.cols); j++) {
            if (j === parseInt(dimentions.cols)) {

                matrix[i][j] = { name: `c${i}`, input: '', error: '' };
            }
            else {
                matrix[i][j] = { name: `m${i}${j}`, input: '', error: '' };
            }

        }
    }
    const initialValues = {
        matrix: matrix,
        canSubmit: false,
    }
    return (
        <>
            <h1>GaussElmination</h1>
            <label htmlFor="">rows</label>
            <input type="number" onChange={rowChangeHandler}></input>
            <label htmlFor="">cols</label>
            <input type="number" onChange={colChangeHandler}></input>

            {<MatrixForm initialValues={initialValues} />}

        </>
    )
}
export default GaussElmination;