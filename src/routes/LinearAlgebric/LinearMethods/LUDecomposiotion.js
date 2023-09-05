import React, { useState } from "react";
// import MatrixForm from "../MethodForm/MatrixForm/MatrixForm";
import luDecomposition from "../../../lib/lu-decomposition";
import MatrixForm from '../../../components/MethodForm/MatrixForm/MatrixForm'
import MatrixDisplayer from "./matrixDisplayer/MatrixDisplayer";
import FunctionValues from "./functionsValues/FunctionValues";

const LUDecomposition = () => {

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



    const cinitValues = ["c1", "c2", "c3"];
    const xinitValues = ["x1", "x2", "x3"];
    return (
        <div className="solver-container">
            <label>LU Decomposition</label>
            {
                <MatrixForm
                    initialValues={initialValues}
                    solver={luDecomposition}
                    onSolve={solveHandler} />
            }
            {
                (result) ?
                    <div className="result-container">
                        <section className="result-container-section">
                            <div className="steps-container">

                                <MatrixDisplayer matrix={result.Amatrix} label={"Matrix A"} length={3} />
                                <MatrixDisplayer matrix={result.Bmatrix} label={"Matrix B"} length={1} />
                            </div>
                        </section>
                        <section className="result-container-section">
                            <p className="step-header-text">Solving by guass Elmenation</p>
                            <div className="steps-container">
                                {
                                    result.steps.map((step) => {
                                        return (
                                            <MatrixDisplayer matrix={step.matrix} label={step.name} equation={step.equation} length={3} key={step.name} />
                                        )
                                    })
                                }
                            </div>
                            <div className="m-guass-result">
                                <label className="equation-left">m21=<span className="equation-right-result">{result.m21}</span>
                                </label>
                                <label className="equation-left">m31=<span className="equation-right-result">{result.m31}</span>
                                </label>
                                <label className="equation-left">m32=<span className="equation-right-result">{result.m32}</span>
                                </label>
                            </div>
                        </section>
                        <section className="result-container-section">
                            <div className="steps-container">

                                <MatrixDisplayer matrix={result.Lmatrix} label={"Lower Matrix"} length={3} />
                                <MatrixDisplayer matrix={result.Umatrix} label={"Upper Matrix"} length={3} />

                            </div>
                        </section>
                        <section className="result-container-section">
                            <div>
                                <p className="step-header-text">Firslty We Solve The System</p>
                                <p className="step-desc-text">Lc=b</p>
                            </div>
                            <div className="steps-container">
                                <MatrixDisplayer matrix={result.Lmatrix} label={"L"} length={3} />
                                <MatrixDisplayer matrix={cinitValues} label={"C"} length={1} />
                                <MatrixDisplayer matrix={result.Bmatrix} label={"b"} length={1} />
                            </div>
                            <p className="step-footer-text">The Back Substitution Gives</p>
                            <div className="m-guass-result">{result.Cvalues.map((c, index) => {
                                return (<label className="equation-left" key={c}>
                                    {cinitValues[index]}=
                                    <span className="equation-right-result">{c}</span></label>

                                )
                            })}
                            </div>
                        </section>
                        <section className="result-container-section">
                            <div>
                                <p className="step-header-text">Secondly We Solve The System</p>
                                <p className="step-desc-text">Ux=C</p>
                            </div>
                            <div className="steps-container">
                                <MatrixDisplayer matrix={result.Umatrix} label={"U"} length={3} />
                                <MatrixDisplayer matrix={xinitValues} label={"X"} length={1} />
                                <MatrixDisplayer matrix={result.Cvalues} label={"C"} length={1} />
                            </div>
                        </section>
                        <section>
                            <FunctionValues equations={result.equations} xValues={result.xValues} />
                        </section>
                    </div>
                    : null
            }
        </div >
    )
}
export default LUDecomposition;