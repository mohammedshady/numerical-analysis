import React, { useState } from "react";
import MatrixForm from "../../../components/MethodForm/MatrixForm/MatrixForm";
import { cramersRule } from "../../../lib/cramers-rule-method";
import MatrixDisplayer from "./matrixDisplayer/MatrixDisplayer";

const CramersRule = () => {

    const [result, setResult] = useState(null)

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
    const solveHandler = (obj) => {
        setResult(obj);
    }

    return (
        <div className="solver-container">
            <label>Crammers Rule</label>
            {
                <MatrixForm
                    initialValues={initialValues}
                    solver={cramersRule}
                    onSolve={solveHandler}
                />
            }
            {

                (result) ?
                    <div className="result-container">
                        <section className="result-container-section">
                            <div className="steps-container">
                                {
                                    result.steps.map((step) => {
                                        return (
                                            <div key={step.label} className="step-card">
                                                <div className="step-equation">{step.name}</div>
                                                <MatrixDisplayer matrix={step.matrix} label={"Matrix A"} length={3} />
                                                <div className="step-det">
                                                    Det({step.name.slice(7, 10)})={step.det}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </section>
                        <div className="cr-result result">
                            <div className="cr-functions-result">
                                <p>Result</p>
                                {result.matDet.map((det, index) => {
                                    const subscriptedA = det.name.replace(/A(\d+)/g, 'A<sub class="subscript">$1</sub>');

                                    return (<div className="mat-result" key={det.name} >
                                        {"X" + index + "="}
                                        <div className="fraction" >
                                            <div className="numerator" dangerouslySetInnerHTML={{ __html: subscriptedA }}></div>
                                            <div className="middle"></div>
                                            <div className="denumerator">
                                                {result.steps[0].name.slice(7, 10)}
                                            </div>
                                        </div>
                                        {"="}
                                        <div key={det.name} className="fraction" >
                                            <div className="numerator">{det.det}</div>
                                            <div className="middle"></div>
                                            <div className="denumerator">
                                                {result.steps[0].det}
                                            </div>
                                        </div>
                                        {"="}
                                        <div key={det.name} className="final-result" >
                                            {parseFloat(det.overD.toFixed(2))}
                                        </div>


                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div >


    )
}
export default CramersRule;