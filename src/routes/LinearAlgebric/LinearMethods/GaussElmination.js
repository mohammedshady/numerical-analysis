import React, { useState } from "react";
// import MatrixForm from "../MethodForm/MatrixForm/MatrixForm";
import { gaussElemenationMethod } from "../../../lib/gaussElemenation-method";
import MatrixForm from '../../../components/MethodForm/MatrixForm/MatrixForm';
import MatrixDisplayer from "./matrixDisplayer/MatrixDisplayer";
import FunctionValues from "./functionsValues/FunctionValues";

const GaussElmination = () => {

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
    }

    return (
        <div className="solver-container">
            <label>Gauss Elimination</label>
            {
                <MatrixForm
                    initialValues={initialValues}
                    solver={gaussElemenationMethod}
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
                                            <MatrixDisplayer matrix={step.matrix} label={step.name} equation={step.equation} length={4} key={step.name} />
                                        )
                                    })
                                }
                            </div>
                        </section>
                        <div className="m-guass-result">
                            <label className="equation-left">m21=<span className="equation-right-result">{parseFloat(result.m21.toFixed(2))}</span>
                            </label>
                            <label className="equation-left">m31=<span className="equation-right-result">{parseFloat(result.m31.toFixed(2))}</span>
                            </label>
                            <label className="equation-left">m32=<span className="equation-right-result">{parseFloat(result.m32.toFixed(2))}</span>
                            </label>
                        </div>
                        <FunctionValues equations={result.equations} xValues={result.xValues} />
                    </div>
                    : null
            }
        </div>
    )
}
export default GaussElmination;