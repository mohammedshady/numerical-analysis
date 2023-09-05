import React, { useState } from "react";
// import MatrixForm from "../MethodForm/MatrixForm/MatrixForm";
import { gaussJordan } from "../../../lib/guassJordan-method";
import MatrixForm from '../../../components/MethodForm/MatrixForm/MatrixForm';
import MatrixDisplayer from "./matrixDisplayer/MatrixDisplayer";
import FunctionValues from "./functionsValues/FunctionValues";

const GaussJordan = () => {

    const [result, setResult] = useState(null);

    let matrix = []
    for (let i = 0; i < 3; i++) {
        matrix[i] = [];
        for (let j = 0; j <= 3; j++) {
            if (j === 3) {

                matrix[i][j] = { name: `c${i}`, input: '', error: '', value: '' };
            }
            else {
                matrix[i][j] = { name: `m${i}${j}`, input: '', error: '', value: '' };
            }

        }
    }
    const initialValues = {
        matrix: matrix,
        canSubmit: true,
    }
    const solveHandler = (data) => {
        setResult(data);
        console.log(data)
    }

    return (
        <div className="solver-container">
            <label>Gauss Jordan</label>
            {
                <MatrixForm
                    initialValues={initialValues}
                    solver={gaussJordan}
                    onSolve={solveHandler} />
            }
            {
                (result) ?
                    <div className="result-container">
                        <section className="result-container-section">
                            <div className="steps-container">
                                {
                                    result.steps.map((step) => {
                                        return (
                                            <MatrixDisplayer matrix={step.matrix} label={step.label} equation={step.step} length={4} key={step.label} />
                                        )
                                    })
                                }
                            </div>
                        </section>
                        <FunctionValues xValues={result.xValues} />
                    </div>
                    : null
            }
        </div>
    )
}
export default GaussJordan;